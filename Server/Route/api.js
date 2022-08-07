const axios = require("axios");
const { response } = require("express");
const express = require("express");
const { existsSync } = require("fs");
const app = express();
const CELSIUS = 273.15;

// get external api - city name
const externalApiRequest = function (cityName) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ae8fcabca6d0e7f103e3f23866fc1651`
  );
};

app.get("/city/:cityName", (request, response) => {
  let requestApi = externalApiRequest(request.params.cityName);
  requestApi.then(function (res) {
    let cityInfo = res.data;
    let temp = cityInfo.main.temp;
    let tempToCels = parseInt(temp - CELSIUS); 
    let city = {
      name: cityInfo.name,
      temperature: tempToCels,
      condition: cityInfo.weather[0].description,
      conditionPic: 
        "http://openweathermap.org/img/wn/" +
        cityInfo.weather[0].icon +
        "@2x.png",
    };
    response.send(city);
  });
  //catch error
});

app.get("/cities", (request, response) => {
  City.find({}, function (err, cities) {
    response.send(cities);
  });
});

app.post("/city", (request, response) => {
  let cityInfo = request.body;
  let newCityInfo = new City({
    name: cityInfo.name,
    temperature: city.temperature,
    condition: city.condition,
    conditionPic: city.conditionPic,
  });
  newCityInfo.save();
  response.send(newCityInfo);
});

app.delete("/city/:cityName", async (request, response) => {
  const isDeleted = await deleteOne(request.params.cityName);
  if (isDeleted.error) {
    response.status(500).json({
      message: isDeleted.error,
    });
  }
  response.status(200).json({
    message: "Deleted Successfully",
  });
});

module.exports = app;
