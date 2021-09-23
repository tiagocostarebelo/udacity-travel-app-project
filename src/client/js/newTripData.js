import {resetResults} from './resetResults';

async function newTripData() {
    const res = await fetch('http://localhost:8010/trips')
    try {
        const tripData = await res.json();      
        displayTrip(tripData);  
    }catch(error) {
        console.log("error", error);
    }
};

function displayTrip(tripData) {
    const results = document.getElementById('results-container');
    results.style.display = "flex";
    for (let i = 0; i < tripData.data.length; i++) {
            const today = new Date;
            const date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate(); 
            //handling them
            const departDate = new Date(tripData.data[i].departure);
            const arriveDate = new Date (tripData.data[i].arrival);
            //take total days
            const difTime = arriveDate.getTime() - departDate.getTime();
            let totalDays = difTime / (1000 * 3600 *24); 

            const weatherForecast = tripData.data[i].forecast;

            const tripCard = document.createElement('div');
            const tripInfo = document.createElement('section');
            const location = document.createElement('div');
            const image = document.createElement('div');
            const departure = document.createElement('div');
            const arrival = document.createElement('div');
            const tripLength = document.createElement('div');
            const displayWeather = document.createElement('div');
            

            tripCard.classList.add('tripCard');        
            tripInfo.classList.add('tripInfo');        
            location.classList.add('location');        
            image.classList.add('image');        
            departure.classList.add('departure', 'info');        
            arrival.classList.add('arrival', 'info');        
            tripLength.classList.add('tripLength', 'info');
            displayWeather.classList.add('displayWeather');
            

        location.innerHTML = `${tripData.data[i].destination}, <span>${tripData.data[i].country}</span>`;
        image.innerHTML = `<img src=${tripData.data[i].photo}>`;
        departure.innerHTML = `Departure: <span>${tripData.data[i].departure}</span>`;
        arrival.innerHTML = `Arrival: <span>${tripData.data[i].arrival}</span>`;
        tripLength.innerHTML = `Trip Length: <span>${totalDays}</span>`;   
        displayWeather.innerHTML = 'Weather Forecast';

        tripInfo.appendChild(location);
        tripInfo.appendChild(image);
        tripInfo.appendChild(departure);
        tripInfo.appendChild(arrival);
        tripInfo.appendChild(tripLength);
        tripInfo.appendChild(displayWeather);
        tripCard.appendChild(tripInfo);
        results.appendChild(tripCard);
        
        
        for (let i = 0; i < weatherForecast.length; i++) {
            if(new Date(weatherForecast[i].date) >= departDate) {                
                
                const tripWeather = document.createElement('tripWeather');
                const forecast = document.createElement('div');
                const foreDate = document.createElement('div');
                const foreWeather = document.createElement('div');
                const foreDescript = document.createElement('div');
                
                tripWeather.classList.add('tripWeather');                
                forecast.classList.add('forecast');                
                foreDate.classList.add('date');
                foreWeather.classList.add('weather');
                foreDescript.classList.add('descript');
                
                foreDate.innerHTML = weatherForecast[i].date;        
                foreWeather.innerHTML = `${weatherForecast[i].high_temp}° / ${weatherForecast[i].low_temp}°`;
                foreDescript.innerHTML = weatherForecast[i].weather.description;
                
                
                forecast.appendChild(foreDate);
                forecast.appendChild(foreWeather);
                forecast.appendChild(foreDescript);
                tripWeather.appendChild(forecast);
                tripCard.appendChild(tripWeather);
                
            }   
        }
    }
    document.getElementById('myForm').reset();
};



export {newTripData, displayTrip, resetResults}

