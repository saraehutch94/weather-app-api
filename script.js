// Constants -> Data that does not change

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "636c081e5a0b64f047edce5f8e863700";

// Variables -> Data that changes

let cityData;

// Cached Element References (DOM Elements)

const $form = $("form");
const $input = $("input[type='text']");
const $main = $("main");

// Event Listeners

$form.on("submit", handleSubmit);

// Functions

function handleSubmit(evt) {
    evt.preventDefault();
    const cityName = $input.val();
    $.ajax(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=imperial`)
        .then(function (data) {
            cityData = data;
            render();
        }, function (error) {
            console.log("promise failed");
            console.log(error);
        });
};

function render() {
    $main.html(`
        <h3>Weather for:</h3>
        <p id="city">${cityData.name}</p>
        <p>Temperature:</p>
        <p id="temp">${cityData.main.temp}</p>
        <p>Feels like:</p>
        <p id="feels-like">${cityData.main.feels_like}</p>
        <p>Weather:</p>
        <p id="weather">${cityData.weather[0].description}</p>
    `);
};