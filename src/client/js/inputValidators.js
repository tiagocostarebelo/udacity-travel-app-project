import { displayErrorMsg } from "./errorMsg";

const btn = document.getElementById('btn');
btn.addEventListener('click', inputValidators);

// document.getElementById('btn').addEventListener('click', inputValidators);

function inputValidators() {         
    if (
    destination.value === '' || 
    destination.value == null || 
    departure.value === '' || 
    departure.value == null ||
    arrival.value === '' ||
    arrival.value == null) {
        displayErrorMsg();
        return false;
    } else {
        return true;
    }
}

export {inputValidators}