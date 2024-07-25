# Weather App

This is a simple weather application built with ReactJS that displays the current weather information for a specified city.

## Features

- Displays current temperature, humidity, wind speed, and weather conditions.
- Automatically fetches weather data for a default city on load.
- Allows users to search for weather data by entering a city name.

## Technologies Used

- ReactJS
- OpenWeatherMap API

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Obtain an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

4. Create a `.env` file in the root directory and add your API key:
    ```sh
    REACT_APP_WEATHER_API_KEY=your_api_key
    ```

5. Start the development server:
    ```sh
    npm start
    ```

## Usage

1. Open the application in your browser:
    ```
    http://localhost:3000
    ```

2. The weather data for the default city (London) will be displayed.

3. To search for another city, enter the city name in the input field and click the search icon.

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.


