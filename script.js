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
    console.log(cityName);

    $.ajax(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=imperial`)
    .then(function(data) {
        // success callback function
        cityData = data;
        render();
    }, function(error) {
        // failure callback function
        console.log("promise failed");
        console.log(error);
    });
};

function render() {
    $city.text(data.name);
    $temp.text(data.main.temp);
    $feelsLike.text(data.main.feels_like);
    $weather.text(data.weather[0].description);
};
