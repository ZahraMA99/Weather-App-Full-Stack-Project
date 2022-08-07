const renderer = new Renderer();
const tempManager = new TempManager();

let cityName = $("#city-name-input").val;

const loadPage = async function () {
  await tempManager.getDataFromDB();
  renderer.renderWeatherData(tempManager.cityData);
  
};

const handleSearch = async function (cityName) {
  console.log(tempManager.cityData);
  await tempManager.getCityData(cityName);
  renderer.renderWeatherData(tempManager.cityData);
};

$("#search-icon").on("click", function (cityName) {
  $("#city-name-input").val("");
  handleSearch(cityName);
});
