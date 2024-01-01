# Weather Dashboard
This is a weather dashboard application that allows users to see the weather outlook for multiple cities. Users can plan their trips accordingly based on the weather forecast.

## Table of Contents
Installation

Usage

API Key

Technologies Used

Contributing

Challenges

License

## Installation
To install the application, follow these steps:

Clone the repository to your local machine.

Open the project in your code editor.

Open the index.html file in your browser.

## Usage
Upon opening the application, users will be greeted with a header/hero area that displays the current time and date. The time and date are updated every second using Day.js.


The application features a form where users can enter the name of a city. Upon submitting the form, the application retrieves the geographical coordinates (latitude and longitude) of the city using the OpenWeatherMap API. The API key is used to authenticate the request.


Once the coordinates are obtained, the application makes a request to the OpenWeatherMap 5 Day Weather Forecast API to retrieve the weather data for the specified city. The weather data includes information such as temperature, humidity, and weather conditions for the next 5 days.


The retrieved weather data is then displayed on the dashboard, dynamically updating the HTML and CSS. The dashboard includes a card for each day, showing the date, temperature, humidity, and weather conditions.

## API Key
To use the OpenWeatherMap API and retrieve weather data, you will need to obtain an API key. Follow these steps to get an API key:



Visit the OpenWeatherMap website at https://openweathermap.org.

Sign up for a new account or log in to your existing account.

Once logged in, navigate to your account dashboard.

Find the API Keys section and generate a new API key.

Copy the generated API key.


After obtaining the API key, replace the {API key} placeholder in the base URL (https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}) with your actual API key.


Please note that it may take up to 2 hours for the API key to activate after generating it.

## Technologies Used
This application utilizes the following technologies:

HTML

CSS

JavaScript

Day.js

OpenWeatherMap API

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request.

## Challenges
### Retrieving Geographical Coordinates:
 One of the challenges was retrieving the geographical coordinates (latitude and longitude) of a city based on the user's input. This required making a request to the OpenWeatherMap API and handling the response to extract the coordinates. Additionally, handling errors and providing appropriate feedback to the user in case of invalid city names or API errors was a challenge.

 ### Dynamic Updating of HTML and CSS:
 The application needed to dynamically update the HTML and CSS to display the retrieved weather data. This involved manipulating the DOM and updating the content and styles based on the data received from the API. Coordinating the updating of multiple elements and ensuring a smooth user experience presented a challenge.

## License
This project is licensed under the MIT License.
