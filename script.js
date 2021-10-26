// Constants -> Data that does not change

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "636c081e5a0b64f047edce5f8e863700";
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day3 = days[date.getDay() + 2];
const day4 = days[date.getDay() + 3];
const day5 = days[date.getDay() + 4];

// Variables -> Data that changes

let cityData;

// Cached Element References (DOM Elements)

const $form = $("form");
const $input = $("input[type='text']");
const $main = $("main");
const $allSections = $("section");
const $h2 = $(".weather-for");
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
        $h2.html(`${cityData.city.name} Weather`);
        $main.html(`
            <section class="flex-item">
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[4].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[4].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[4].weather[0].description).charAt(0).toUpperCase() + (cityData.list[4].weather[0].description).slice(1)}</p>
            </section>    
        `);
        $main.css({
            "display": "flex",
            "flex-wrap": "wrap",
            "justify-content": "center"
        });
        const $flexItem = $(".flex-item");
        $flexItem.css({
            "border": "2px solid black",
            "padding": "20px",
            "height": "350px"

        });
    } else if ($select.val() === "2") {
        $h2.html(`${cityData.city.name} Weather`);
        $main.html(`
            <section class="flex-item">
                <h3>Today</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[4].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[4].main.feels_like}&#8457;</p>
                <hr>
                <h4>Weather</h4>
                <p id="weather">${(cityData.list[4].weather[0].description).charAt(0).toUpperCase() + (cityData.list[4].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>Tomorrow</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[12].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[12].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[12].weather[0].description).charAt(0).toUpperCase() + (cityData.list[12].weather[0].description).slice(1)}</p>
            </section>
        `);
        $main.css({
            "display": "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-evenly"
        });
        const $flexItem = $(".flex-item");
        $flexItem.css({
            "border": "3px solid black",
            "padding": "20px",
            "height": "350px"
        });
    } else if ($select.val() === "3") {
        $h2.html(`${cityData.city.name} Weather`);
        $main.html(`
            <section class="flex-item">
                <h3>Today</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[4].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[4].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[4].weather[0].description).charAt(0).toUpperCase() + (cityData.list[4].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>Tomorrow</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[12].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[12].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[12].weather[0].description).charAt(0).toUpperCase() + (cityData.list[12].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>${day3}</h3>
                <h4>Temperature</h4>
                <p id-"temp">${cityData.list[20].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[20].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[20].weather[0].description).charAt(0).toUpperCase() + (cityData.list[20].weather[0].description).slice(1)}</p>
            </section>
        `);
        $main.css({
            "display": "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-evenly"
        });
        const $flexItem = $(".flex-item");
        $flexItem.css({
            "border": "3px solid black",
            "padding": "20px",
            "height": "350px"
        });
    } else if ($select.val() === "4") {
        $h2.html(`${cityData.city.name} Weather`);
        $main.html(`
            <section class="flex-item">
                <h3>Today</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[4].main.temp}&#8457;</p>
                <hr>
                <h4>Feels like</h4>
                <p id="feels-like">${cityData.list[4].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[4].weather[0].description).charAt(0).toUpperCase() + (cityData.list[4].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>Tomorrow</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[12].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[12].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[12].weather[0].description).charAt(0).toUpperCase() + (cityData.list[12].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>${day3}</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[20].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[20].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[20].weather[0].description).charAt(0).toUpperCase() + (cityData.list[20].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>${day4}</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[28].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[28].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[28].weather[0].description).charAt(0).toUpperCase() + (cityData.list[28].weather[0].description).slice(1)}</p>
            </section>
        `);
        $main.css({
            "display": "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-evenly"
        });
        const $flexItem = $(".flex-item");
        $flexItem.css({
            "border": "3px solid black",
            "padding": "20px",
            "height": "350px"
        });
    } else {
        $h2.html(`${cityData.city.name} Weather`);
        $main.html(`
            <section class="flex-item">
                <h3>Today</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[4].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[4].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[4].weather[0].description).charAt(0).toUpperCase() + (cityData.list[4].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>Tomorrow</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[12].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[12].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[12].weather[0].description).charAt(0).toUpperCase() + (cityData.list[12].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>${day3}</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[20].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[20].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[20].weather[0].description).charAt(0).toUpperCase() + (cityData.list[20].weather[0].description).slice(1)}</p>
            </section>
                <section class="flex-item">
                <h3>${day4}</h3>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[28].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[28].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[28].weather[0].description).charAt(0).toUpperCase() + (cityData.list[28].weather[0].description).slice(1)}</p>
            </section>
            <section class="flex-item">
                <h3>${day5}</h5>
                <h4>Temperature</h4>
                <p id="temp">${cityData.list[36].main.temp}&#8457;</p>
                <hr>
                <h4>Feels Like</h4>
                <p id="feels-like">${cityData.list[36].main.feels_like}&#8457;</p>
                <hr>
                <h4>Details</h4>
                <p id="weather">${(cityData.list[36].weather[0].description).charAt(0).toUpperCase() + (cityData.list[36].weather[0].description).slice(1)}</p>
            </section>
        `);
        $main.css({
            "display": "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-evenly",
        });
        const $flexItem = $(".flex-item");
        $flexItem.css({
            "border": "3px solid black",
            "padding": "20px",
            "height": "350px"
        });
    }
};