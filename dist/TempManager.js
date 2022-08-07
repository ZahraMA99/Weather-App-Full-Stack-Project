class TempManager {
  constructor() {
    this.cityData = [];
  }
  getDataFromDB() {
    return $.ajax({
      method: "get",
      url: "/cities",
      success: (cities) => {
        for (let city of cities) {
          this.cityData.push(city);
        }
      },
      error: function (error, text) {
        console.log(error);
      },
    });
  }

  getCityData(cityName) {
    return $.ajax({
      method: "get",
      url: `/city/${cityName}`,
      success: (city) => {
        this.cityData.push(city);
      },
      error: function (error, text) {
        console.log(error);
      },
    });
  }

  updateCityTemp(cityName) {
    return $.ajax({
      method: "put",
      url: `/city/${cityName}`,
      success: (city) => {
        let updateCityData = this.cityData.find(
          (city) => city.name === city.name
        );
        updateCityData.temperature = city.temperature;
        updateCityData.condition = city.condition;
        updateCityData.conditionPic = city.conditionPic;
      },
      error: function (error, text) {
        console.log(error);
      },
    });
  }

  saveCity(city) {
    let indexOfCity = this.cityData.findIndex(
      (city) => city.name === city.name
    );
    this.cityData.splice(indexOfCity, 1);
    return $.ajax({
      method: "post",
      url: "/city",
      data: city,
      success: (city) => {
        this.cityData.push(city);
      },
      error: function (error, text) {
        console.log(error);
      },
    });
  }

  removeCity(cityName) {
    return $.ajax({
      method: "delete",
      url: `/city/${cityName}`,
      success: (city) => {
        let indexOfCity = this.cityData.findIndex(
          (city) => city.name === cityName
        );
        this.cityData.splice(indexOfCity, 1);
      },
      error: function (error, text) {
        console.log(error);
      },
    });
  }

  getCities() {
    return this.cityData;
  }
}
