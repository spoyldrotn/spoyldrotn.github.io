const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c317d9209bfb5e25c584b2191d32c8fa';

//windchill//
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        var temp = parseFloat(jsObject.main.temp);
        var speed = parseFloat (jsObject.wind.speed);
        var chill = "NaN";
            if (temp <= 50 && speed >3){
                chill= 32.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 + temp + Math.pow (speed, 0.16)); 
                chill.toFixed(2);
            }

                document.getElementById('currently').textContent = jsObject.weather[0].description;
                document.getElementById('current-temp').textContent = temp;
                document.getElementById('humidity').textContent = jsObject.main.humidity;
                document.getElementById('windspeed').textContent = speed;
                document.getElementById('windChill').textContent = chill;
            });
