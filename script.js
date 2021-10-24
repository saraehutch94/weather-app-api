// Constants -> Data that does not change

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "636c081e5a0b64f047edce5f8e863700";

// Variables -> Data that changes

let cityData;

// Cached Element References (DOM Elements)

const $city = $("#city");
const $temp = $("#temp");
const $feelsLike = $("#feels-like");
const $weather = $("#weather");
const $form = $("form");
const $input = $("input[type='text']");

// Event Listeners

$form.on("submit", handleSubmit);

// Functions

function handleSubmit(evt) {
    evt.preventDefault();
    const cityName = $input.val();
    console.log(cityName);

    $.ajax(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=imperial`)
    .then(function(data) {
        // success callback function
        $city.text(data.name);
        $temp.text(data.main.temp);
        $feelsLike.text(data.main.feels_like);
        $weather.text(data.weather[0].description);
        cityData = data;
    }, function(error) {
        // failure callback function
        console.log("promise failed");
        console.log(error);
    });
};

// const promise = $.ajax("https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=636c081e5a0b64f047edce5f8e863700");

// console.log(promise);

$.ajax("https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=636c081e5a0b64f047edce5f8e863700&units=imperial")
.then(function(data) {
    // success callback function
    $city.text(data.name);
    $temp.text(data.main.temp);
    $feelsLike.text(data.main.feels_like);
    $weather.text(data.weather[0].description);
}, function(error) {
    // failure callback function
    console.log("promise failed");
    console.log(error);
});
