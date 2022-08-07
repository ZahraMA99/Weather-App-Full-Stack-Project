let cityTemplete = $("#city-data-templete");
let cityContainer = $(".city-container");

class Renderer {
  renderWeatherData(allCityData) {
    let source = cityTemplete.html();
    let template = Handlebars.compile(source);
    let cityInfo = template({ cityWeatherInfo: allCityData }); // array || object
    cityContainer.empty().append(cityInfo);
  }
}
