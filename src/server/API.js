//GEONAMES
const geonames = {
    baseGeoUrl: "http://api.geonames.org/searchJSON?q=",
    midGeoUrl: "&maxRows=10&username=",
    geoUserKey: process.env.GEO_USERNAME
}
//WEATHERBIT
const weatherbit = {
    baseWeatherUrl: "https://api.weatherbit.io/v2.0/forecast/daily",
    latWeatherUrl: "?lat=",
    lonWeatherUrl: "&lon=",
    daysWeatherUrl: "&days=",
    endWeatherUrl: "&key=",
    weatherApiKey: process.env.WEATHERBIT_API
}
//PIXABAY
const pixabay = {
    basePixaUrl: "https://pixabay.com/api/?key=",
    pixaKey: process.env.PIXABAY_KEY,
    queryPixaUrl: "&q=",
    typePixaUrl: "&image_type=photo",
    orientPixaUrl: "&orientation=horizontal",
    categoryPixaUrl: "&category=buildings",
    hitsPixaUrl: "&per_page=3"
}


module.exports = { geonames, weatherbit, pixabay }