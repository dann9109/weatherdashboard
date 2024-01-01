
var searchInput = $('#search-input');
var searchBtn = $('#search-btn');
var apiKey = 'b5a303b9ff94cae04c5fa73b6c489333';
var currentURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;
var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=imperial`;

function getSearchHistory() {
    var rawData = localStorage.getItem('search-history');
    var history = JSON.parse(rawData) || [];
    return history;
}

function getCurrentForecast() {
    var cityName = searchInput.val().trim();
    var history = getSearchHistory();

    if (!history.includes(cityName)) {
        history.push(cityName);
        localStorage.setItem('search-history', JSON.stringify(history));
    }

    // Make a request for current weather using the URL and inject the city name value at the end
    $.get(currentURL + '&q=' + cityName)
        .then(function (data) {
            var weatherData = {
                city: data.name,
                date: new Date(data.dt * 1000).toLocaleDateString(),
                temperature: data.main.temp + '°F',
                humidity: data.main.humidity + '%',
                windSpeed: data.wind.speed + 'mph',
            };
            updateCurrentWeather(weatherData);
            getForecastWeather(cityName);
        });
}

function getForecastWeather(cityName) {
    $.get(forecastURL + '&q=' + cityName)
        .then(function (data) {
            var forecastData = [];
            var blocks = data.list;

            for (var i = 0; i < blocks.length; i++) {
                var blockObj = blocks[i];

                // Only work with noon time blocks
                if (blockObj.dt_txt.includes('12:00')) {
                    var forecastDay = {
                        date: new Date(blockObj.dt * 1000).toLocaleDateString(),
                        temperature: blockObj.main.temp + '°F',
                        humidity: blockObj.main.humidity + '%',
                        windSpeed: blockObj.wind.speed + 'mph',
                    };
                    forecastData.push(forecastDay);
                }
            }

            updateFiveDayForecast(forecastData);
        });
}

// Function to update the current weather section
function updateCurrentWeather(weatherData) {
    const currentWeatherElement = document.querySelector('.current-weather');
    currentWeatherElement.innerHTML = `
    <p>City: ${weatherData.city}</p>
    <hr>
    <p>Date: ${weatherData.date}</p>
    <hr>
    <p>Temperature: ${weatherData.temperature}</p>
    <hr>
    <p>Humidity: ${weatherData.humidity}</p>
    <hr>
    <p>Wind Speed: ${weatherData.windSpeed}</p>
  `;
}

// Function to update the 5-day forecast section
function updateFiveDayForecast(forecastData) {
    const forecastCardsElement = document.querySelector('.forecast-cards');
    forecastCardsElement.innerHTML = '';

    forecastData.forEach((day) => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
      <p>Date: ${day.date}</p>
      <p>Temperature: ${day.temperature}</p>
      <p>Humidity: ${day.humidity}</p>
      <p>Wind Speed: ${day.windSpeed}</p>
    `;
        forecastCardsElement.appendChild(forecastCard);
    });
}

searchBtn.click(getCurrentForecast);

$('.history').on('click', 'button', function () {
    var cityName = $(this).text();
    getCurrentForecast(cityName);
});