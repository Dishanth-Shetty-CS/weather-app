document.addEventListener("DOMContentLoaded", function (event) {
    //It will prevent form default behavior of the webpage
    event.preventDefault();

    //It's an API key that is used to fetch the weather
    const apikey = "b1693ed7ad181ad79817cc99d0523aa3";

    //Retrieving all the html elements through its id's
    const fetchWeatherButton = document.getElementById("fetchWeather");
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");
    const weatherData = document.getElementById("weatherData");
    const errorField = document.getElementById("error");

    //This event will occurs when user clicks the "fetchWeatherButton"
    fetchWeatherButton.addEventListener("click", function (event) {
        event.preventDefault();

        //Now "city" is holding the name of the particular city
        const city = cityInput.value.trim();

        //Initially all the messages related to "errors","weatherResult","weatherData" are empty
        errorField.innerHTML = "";
        weatherResult.innerHTML = "";
        weatherData.innerHTML = "";

        //It will check whether the user kept the blank input field or not
        if (city.trim() === "") {
            errorField.innerHTML = "This field is required."; //If empty field this error will raise
            cityInput.style.border = "1px solid red"; //with border red
            return; //It will return from this condition
        } else {
            cityInput.style.border = "1px solid green"; //If the above condition is false,then this condition will active
        }

        //When user clicks the "fetch" button then inside the button it will show "Fetching..."
        fetchWeatherButton.innerText = "Fetching...";
        fetchWeatherButton.disabled = true;

        //This API-URL is used to fetch the correct weather from the "https://api.openweathermap.org"
        const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        //With the help of fetchAPI we can fetch the weather from the "APIurl"
        fetch(APIurl)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp; //Getting "temperature" of that city
                const weatherDescription = data.weather[0].description; //Getting "weatherDescription" of that city
                const cloudicon = data.weather[0].icon; //Getting "cloudicon" of that city
                const humidity = data.main.humidity; //Getting "humidity" of that city
                const wind_speed = data.wind.speed; //Getting "wind_speed" of that city
                const iconUrl = `https://openweathermap.org/img/wn/${cloudicon}@4x.png`; //Getting the weather icon from "iconUrl" extension - .png image format

                //It will contains all the "temperature","weather_data","cloudicon","humidity","wind_speed" and "city"
                const weatherOutput = `
                    <b><p id="temp_data" class="weather_info">Temperature</b>: ${temperature} &#8451;</p>
                    <b><p id="weather_data" class="weather_info">Weather</b>: ${weatherDescription}</p>
                    <img src="${iconUrl}" alt="Weather Icon" id="cloudicon">
                    <b><p id="humidity_data" class="weather_info">Humidity</b>: ${humidity} %</p>
                    <b><p id="wind_data" class="weather_info">Wind Speed</b>: ${wind_speed} M/S</p> 
                    <b><p id="location_data" class="weather_info">Area / Location</b>: ${city}</p>           
                `;
                //It will show the weather_info stored in "weatherOutput" - inside the div : "weatherResult"
                weatherResult.innerHTML = weatherOutput;

                //This will reset the "Fetching..." to "Fetch"
                fetchWeatherButton.innerText = "Fetch";
                fetchWeatherButton.disabled = false;
            })
            //Catch block to showing an error related to "Weather/City not available"
            .catch((error) => {
                weatherData.innerHTML = "Weather/City not available!";

                //This will reset the "Fetching..." to "Fetch"
                fetchWeatherButton.innerText = "Fetch";
                fetchWeatherButton.disabled = false;
            });
    });
});
