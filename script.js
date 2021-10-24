// Constants -> Data that does not change

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "636c081e5a0b64f047edce5f8e863700";

// Variables -> Data that changes

let cityData;

// Cached Element References (DOM Elements)

const $form = $("form");
const $input = $("input[type='text']");
const $main = $("main");
const $select = $("select");

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
    if ($select.val() === "1") {
        $main.html(`
        <h3>Weather for:</h3>
        <p id="city">${cityData.city.name}</p>
        <p>Temperature:</p>
        <p id="temp">${cityData.list[4].main.temp}&#8457;</p>
        <p>Feels like:</p>
        <p id="feels-like">${cityData.list[4].main.feels_like}&#8457;</p>
        <p>Weather:</p>
        <p id="weather">${cityData.list[4].weather[0].description}</p>
        `);
    } else if ($select.val() === "2") {
        $main.html(`
        <h3>Weather for:</h3>
        <p id="city">${cityData.city.name}</p>
        <p>Temperature:</p>
        <p id="temp">Today: ${cityData.list[4].main.temp}&#8457;</p>
        <p id="temp-2nd-day">Tomorrow: ${cityData.list[12].main.temp}&#8457;</p>
        <p>Feels like:</p>
        <p id="feels-like">Today: ${cityData.list[4].main.feels_like}&#8457;</p>
        <p id="feels-like-2nd-day">Tomorrow: ${cityData.list[12].main.feels_like}&#8457;</p>
        <p>Weather:</p>
        <p id="weather">Today: ${cityData.list[4].weather[0].description}</p>
        <p id="weather-2nd-day">Tomorrow: ${cityData.list[12].weather[0].description}</p>
        `);
    } else if ($select.val() === "3") {
        $main.html(`
        <h3>Weather for:</h3>
        <p id="city">${cityData.city.name}</p>
        <p>Temperature:</p>
        <p id="temp">Today: ${cityData.list[4].main.temp}&#8457;</p>
        <p id="temp-2nd-day">Tomorrow: ${cityData.list[12].main.temp}&#8457;</p>
        <p id-"temp-3rd-day">Third day: ${cityData.list[20].main.temp}&#8457;</p>
        <p>Feels like:</p>
        <p id="feels-like">Today: ${cityData.list[4].main.feels_like}&#8457;</p>
        <p id="feels-like-2nd-day">Tomorrow: ${cityData.list[12].main.feels_like}&#8457;</p>
        <p id="feels-like-3rd-day">Third day: ${cityData.list[20].main.feels_like}&#8457;</p>
        <p>Weather:</p>
        <p id="weather">Today: ${cityData.list[4].weather[0].description}</p>
        <p id="weather-2nd-day">Tomorrow: ${cityData.list[12].weather[0].description}</p>
        <p id="weather-3rd-day">Third day: ${cityData.list[20].weather[0].description}</p>
        `);
    } else if ($select.val() === "4") {
        $main.html(`
        <h3>Weather for:</h3>
        <p id="city">${cityData.city.name}</p>
        <p>Temperature:</p>
        <p id="temp">Today: ${cityData.list[4].main.temp}&#8457;</p>
        <p id="temp-2nd-day">Tomorrow: ${cityData.list[12].main.temp}&#8457;</p>
        <p id="temp-3rd-day">Third day: ${cityData.list[20].main.temp}&#8457;</p>
        <p id="temp-4th-day">Fourth day: ${cityData.list[28].main.temp}&#8457;</p>
        <p>Feels like:</p>
        <p id="feels-like">Today: ${cityData.list[4].main.feels_like}&#8457;</p>
        <p id="feels-like-2nd-day">Tomorrow: ${cityData.list[12].main.feels_like}&#8457;</p>
        <p id="feels-like-3rd-day">Third day: ${cityData.list[20].main.feels_like}&#8457;</p>
        <p id="feels-like-4th-day">Fourth day: ${cityData.list[28].main.feels_like}&#8457;</p>
        <p>Weather:</p>
        <p id="weather">Today: ${cityData.list[4].weather[0].description}</p>
        <p id="weather-2nd-day">Tomorrow: ${cityData.list[12].weather[0].description}</p>
        <p id="weather-3rd-day">Third day: ${cityData.list[20].weather[0].description}</p>
        <p id="weather-4th-day">Fourth day: ${cityData.list[28].weather[0].description}</p>
        `);
    } else {
        $main.html(`
        <h3>Weather for:</h3>
        <p id="city">${cityData.city.name}</p>
        <p>Temperature:</p>
        <p id="temp">Today: ${cityData.list[4].main.temp}&#8457;</p>
        <p id="temp-2nd-day">Tomorrow: ${cityData.list[12].main.temp}&#8457;</p>
        <p id="temp-3rd-day">Third day: ${cityData.list[20].main.temp}&#8457;</p>
        <p id="temp-4th-day">Fourth day: ${cityData.list[28].main.temp}&#8457;</p>
        <p id="temp-5th-day">Fifth day: ${cityData.list[36].main.temp}&#8457;</p>
        <p>Feels like:</p>
        <p id="feels-like">Today: ${cityData.list[4].main.feels_like}&#8457;</p>
        <p id="feels-like-2nd-day">Tomorrow: ${cityData.list[12].main.feels_like}&#8457;</p>
        <p id="feels-like-3rd-day">Third day: ${cityData.list[20].main.feels_like}&#8457;</p>
        <p id="feels-like-4th-day">Fourth day: ${cityData.list[28].main.feels_like}&#8457;</p>
        <p id="feels-like-5th-day">Fifth day: ${cityData.list[36].main.feels_like}&#8457;</p>
        <p>Weather:</p>
        <p id="weather">Today: ${cityData.list[4].weather[0].description}</p>
        <p id="weather-2nd-day">Tomorrow: ${cityData.list[12].weather[0].description}</p>
        <p id="weather-3rd-day">Third day: ${cityData.list[20].weather[0].description}</p>
        <p id="weather-4th-day">Fourth day: ${cityData.list[28].weather[0].description}</p>
        <p id="weather-5th-day">Fifth day: ${cityData.list[36].weather[0].description}</p>
        `);
    }
};