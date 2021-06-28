import { inputValidators } from "./inputValidators";
import { newTripData } from "./newTripData";

const search = document.getElementById('btn');
search.addEventListener('click', newTripSearch);

async function newTripSearch(e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;

    if (inputValidators(destination, departure, arrival)) {
        console.log(destination, departure, arrival);
        const tripInfo = await postData('http://localhost:8010/destination', {destination, departure, arrival});
        newTripData (tripInfo);
    }
}


async function postData(url, data) {
    //console.log(data);
    await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data),
    });
}


export {newTripSearch, newTripData}


