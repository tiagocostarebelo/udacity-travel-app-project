//Project endpoint
//Dotenv, API's
const dotenv = require('dotenv');
dotenv.config();
//API
const apis = require('./API');

//Express
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Dependencies and Middleware
const path = require('path');
const fetch = require('node-fetch');
//Cors
const cors = require('cors');
const { response } = require('express');
app.use(cors());
//Main folder 
//Note: where our server will go get the html to load. If it is not defined, it will show the message from the GET test Route bellow
//I'll set this once webpack spits the first dist folder. Cannot forget!!
app.use(express.static(path.join(__dirname, '../../dist')));

//Port
const PORT = process.env.PORT || 8010;
app.listen(PORT, function() {
    console.log(`server is listening on localhost ${PORT}`)
});

let projectData = {};

app.get('/trips', getTrips)
async function getTrips(req, res) {
    projectData = {
        data: data
    }
    res.send(projectData);
}

let data = [];
app.post('/destination', (getDestination))
async function getDestination(req, res) {
    const destination = req.body.destination;
    const departure = req.body.departure;
    const arrival = req.body.arrival;
    const days = 16;
    // missing totalDays calculated for the trip
    console.log(destination, departure, arrival, days);


    let geonamesData = await getGeonamesData(destination);
    let lat = geonamesData.geonames[0].lat;
    let lon = geonamesData.geonames[0].lng;
    console.log(lat, lon);

    let forecast = [];
    let weatherbitData = await getWeatherbitData(lat, lon, days);
    for(let i = 0; i < 16; i++){
        let date = weatherbitData.data[i].datetime;
        let high_temp = weatherbitData.data[i].high_temp;
        let low_temp = weatherbitData.data[i].low_temp;
        let weather = weatherbitData.data[i].weather;
        let weatherInfo = {date, high_temp, low_temp, weather}
        console.log(date, high_temp, low_temp, weather)
        forecast.push(weatherInfo);
    };

    let photos;
    let countryName = geonamesData.geonames[0].countryName;
    let pixabayData = await getPixabayData(destination);
    if(pixabayData.total == 0) {
        pixabayData = await getPixabayData(countryName);
    }
        let photoURL = pixabayData.hits[0].webformatURL;
        console.log(photoURL)
        photos = photoURL;
    

    let addData = {
        destination: destination,
        country: countryName,
        departure: departure,
        arrival: arrival,
        forecast: forecast,
        photo: photos
    };
    console.log(addData);
    data.push(addData);
    res.send(addData);
}


const getGeonamesData =  async (destination) => {
    const geoURL = `${apis.geonames.baseGeoUrl}${destination}${apis.geonames.midGeoUrl}${apis.geonames.geoUserKey}`;
    console.log(geoURL);
    console.log(destination);
    console.log(apis.geonames.geoUserKey);
    const resGeo = await fetch(geoURL);
    try{
        const geoData = await resGeo.json();
        return geoData;
    }
    catch(error){
        console.log('error', error);
    }
}

const getWeatherbitData = async (lat, lon, days) => {
    const weatherURL = `${apis.weatherbit.baseWeatherUrl}${apis.weatherbit.latWeatherUrl}${lat}${apis.weatherbit.lonWeatherUrl}${lon}${apis.weatherbit.daysWeatherUrl}${days}${apis.weatherbit.endWeatherUrl}${apis.weatherbit.weatherApiKey}`
    const resWeather = await fetch(weatherURL);
    try{
        const weatherData = await resWeather.json();
        return weatherData;
    }
    catch(error){
        console.log('error', error);
    }
}

const getPixabayData = async (destination) => {
    const pixaURL = `${apis.pixabay.basePixaUrl}${apis.pixabay.pixaKey}${apis.pixabay.queryPixaUrl}${destination}${apis.pixabay.typePixaUrl}${apis.pixabay.orientPixaUrl}${apis.pixabay.categoryPixaUrl}${apis.pixabay.hitsPixaUrl}`
    const resPixa = await fetch(pixaURL);
    try{
        const pixaData = await resPixa.json();
        return pixaData;
    }
    catch(error){
        console.log('error', error);
    }
}

