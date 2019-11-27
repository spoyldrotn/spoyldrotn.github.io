const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c317d9209bfb5e25c584b2191d32c8fa';


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        var temp = jsObject.main.temp.toFixed(0);

            document.getElementById('currently').textContent = jsObject.id.main;
            document.getElementById('current-temp').textContent = temp;
            document.getElementById('humidity').textContent = jsObject.main.humidity;
            document.getElementById('windspeed').textContent = speed;



            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';//note the concatenation
            const desc = jsObject.weather[0].description;//notice how we reference the weather array
            document.getElementById('weather').textContent=desc;
    });

    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c317d9209bfb5e25c584b2191d32c8fa';
    
    
    fetch(jsonURL)
        .then((response) => response.json())
        .then ((jsObject) => {
            //console.log(jsObject);

            var day = "";
            let count = 0;
            for (let i = 0; i < jsObject.list.length; i++) {
              if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                count++;
           
                /*Temp*/
                var temp = jsObject.list[i].main.temp.toFixed(0);
        
                let thehigh = 'high' + count;
                document.getElementById(thehigh).textContent = temp;
        
                /*Day of Week*/
        
                let theday = 'day' + count;
                var d = new Date();
                var n = d.getDay();
                n = n + count - 1;
                if (n > 6){
                  (n = n-7);
                }
        
        
        
                if (n == 0) {
                  day = "Sun";
                } else if (n == 1) {
                  day = "Mon";
                } else if (n == 2) {
                  day = "Tues";
                } else if (n == 3) {
                  day = "Wed";
                } else if (n == 4) {
                  day = "Thurs";
                } else if (n == 5) {
                  day = "Fri";
                } else if (n == 6) {
                  day = "Sat";
                }
        
                document.getElementById(theday).textContent = day;

              }
            }
          });