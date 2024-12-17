import "./style.scss";

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'


document.addEventListener("DOMContentLoaded", () => {
    //fill searchline from query param
    const url = new URL(window.location);
    const search = url.searchParams.get('search');
    document.querySelector('#searchline').innerHTML = search;


    // Add search value to query param of the page and show search value in #searchline
    document.querySelector('#search-button').addEventListener('click', () => {
        const search = document.querySelector('#input').value;
        const url = new URL(window.location);
        url.searchParams.set('search', search);
        window.history.pushState({}, '', url);
        document.querySelector('#searchline').innerHTML = search;
    })
})