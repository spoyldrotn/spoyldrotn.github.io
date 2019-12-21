const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4865287&units=imperial&APPID=c317d9209bfb5e25c584b2191d32c8fa';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    var temper = jsObject.main.temp.toFixed(0);

    document.getElementById('weather').textContent = jsObject.id.main;
    document.getElementById('high').textContent = temper;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('weather').textContent = desc;

  });

