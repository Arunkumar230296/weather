
  document.getElementById('searchButton').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'ad57f37d1c1b0a0d9d9e833c5b05b7ca';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `${data.main.temp} °C`;
      document.getElementById('wind').textContent = `${data.wind.speed} m/s`;
      document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
      document.getElementById('humidity').textContent = `${data.main.humidity} %`;
    })
    .catch(() => alert('City not found'));
});
