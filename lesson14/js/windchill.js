//wind chill//

const weatherapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c317d9209bfb5e25c584b2191d32c8fa';

fetch(weatherapiURL)
 .then((response) => response.json())
 .then((jsObject) => {
  //console.log(jsObject);

  var temp = parseFloat(jsObject.main.temp);
  var speed = parseFloat(jsObject.wind.speed);
  var chill = "N/A";
  if (temp <= 50 && speed > 3) {
   chill = 32.74 + (0.6215 * temp) - (35.74 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
   chill = chill.toFixed(2);
  }

  document.getElementById('weather').textContent = jsObject.weather[0].description;
  document.getElementById('high').textContent = temp;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  document.getElementById('speed').textContent = speed;
  document.getElementById('windchill').innerHTML = chill;

 });