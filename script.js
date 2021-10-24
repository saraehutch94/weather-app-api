// Constants -> Data that does not change


// Variables -> Data that changes


// Cached Element References (DOM Elements)

const $city = $("#city");
const $temp = $("#temp");
const $feelsLike = $("#feels-like");
const $weather = $("#weather");

// Event Listeners


// Functions

// const promise = $.ajax("https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=636c081e5a0b64f047edce5f8e863700");

// console.log(promise);

$.ajax("https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=636c081e5a0b64f047edce5f8e863700")
.then(function(data) {
    // success callback function
    console.log("promise fulfilled!");
    console.log(data);
}, function(error) {
    // failure callback function
    console.log("promise failed");
    console.log(error);
});
