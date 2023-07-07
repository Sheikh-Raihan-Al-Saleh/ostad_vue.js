function getWeatherData(location) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=5d19d342c3fe44c7bf4191928232006&q=${location}&aqi=no`;
  
  $.ajax({
    url: apiUrl,
    method: 'GET',
    success: function(res) {
      viewWeatherInfo(res);
    },
    error: function() {
      viewErrorMessage('Not found, Please Try Again Later!!');
    }
  });
}


function viewWeatherInfo(data) {
  const weatherInfoElement = document.getElementById('weatherInfo');
  weatherInfoElement.innerHTML = `
    <h3>${data.location.name}, ${data.location.country}</h3>
    <p>Temperature: ${data.current.temp_c}°C</p>
    <p>Description: ${data.current.condition.text}</p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Cloud: ${data.current.cloud}%</p>
  `;
}

function viewErrorMessage(message) {
  const weatherInfoElement = document.getElementById('weatherInfo');
  weatherInfoElement.innerHTML = `<p class="text-danger">${message}</p>`;
}


$(document).ready(function() {
  const Submit = document.getElementById('Submit');
  Submit.addEventListener('click', function() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value.trim();

    if (location !== '') {
      getWeatherData(location);
    }
  });
});
