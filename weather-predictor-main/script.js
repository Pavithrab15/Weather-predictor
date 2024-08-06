//https://api.openweathermap.org/data/2.5/weather?q={city-name}&appid={API key}


const getWeatherData = async (city) => {
    const API_KEY = "2a2841955c4b4aaca9794704232407"; // Replace 'YOUR_API_KEY' with your actual API key
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&units=imperial`;
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data; // Return the data fetched from the API
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // Rethrow the error to be caught by the calling code
    }
  };
  

function searchCity() {
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
        .then((response) => {
            showWeatherData(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

showWeatherData = (weatherData) => {
    if (weatherData.success === false) {
        // Check if the API response indicates an error
        console.log('Error:', weatherData.error.info);
        return;
    }
        console.log(weatherData);
    document.getElementById('city-name').innerText = weatherData.location.name;
    document.getElementById('weather-type').innerText = weatherData.current.condition.text;
    document.getElementById('celcius').innerText = weatherData.current.temp_c;
    document.getElementById('fahrenheit').innerText = weatherData.current.temp_f;
}

