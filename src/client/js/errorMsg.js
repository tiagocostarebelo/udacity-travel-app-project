function displayErrorMsg(){       
    const errorMsg = 'Please insert a valid destination, departure and/or arrival dates';
    document.querySelector('.error-msg').innerHTML = errorMsg;
    const errorWrapper = document.querySelector('.error-modal-wrapper');
    errorWrapper.style.display = "flex";
}

export {displayErrorMsg};