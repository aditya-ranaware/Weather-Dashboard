const urlParams = new URLSearchParams(window.location.search);
        const city = urlParams.get('city');
        
        if (city) {
            // Fetch weather details for the city from the API
            const apiKey = '6aa4c2a8a102ec1e554349181e69e80b';  // Replace with your OpenWeatherMap API key
            // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        const weatherDetails = `
                            <h2>Weather in ${city}</h2>
                            <p>Temperature: ${data.main.temp}°C</p>
                            <p>Weather: ${data.weather[0].description}</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                            <p>Wind Speed: ${data.wind.speed} m/s</p>
                        `;
                        document.getElementById('weatherDetails').innerHTML = weatherDetails;
                    } else {
                        document.getElementById('weatherDetails').innerHTML = `<p>City not found!</p>`;
                    }
                })
                .catch(err => {
                    console.error('Error fetching weather data:', err);
                    document.getElementById('weatherDetails').innerHTML = `<p>Error fetching weather data!</p>`;
                });
        } else {
            document.getElementById('weatherDetails').innerHTML = `<p>No city entered.</p>`;
        }
    