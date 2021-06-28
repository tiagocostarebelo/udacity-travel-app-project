const search = document.getElementById('btn');
search.addEventListener('click', resetResults);

function resetResults() {
    if (document.getElementById('results-container').style.display = 'flex'){
        document.getElementById('results-container').innerHTML = '';
    }
}

export {resetResults};