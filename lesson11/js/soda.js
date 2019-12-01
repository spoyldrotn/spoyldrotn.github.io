const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=c317d9209bfb5e25c584b2191d32c8fa';


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
    
const jsonURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=c317d9209bfb5e25c584b2191d32c8fa';
   
  fetch(jsonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    var day = "";
    let count = 0;
    for (let i = 0; i < jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {
        count++;
    /*Temp*/
        var temper = jsObject.list[i].main.temp.toFixed(0);

        let myhigh = 'high' + count;
        document.getElementById(myhigh).textContent = temper;

        /*Day of Week*/

        let myday = 'day' + count;
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

        document.getElementById(myday).textContent = day;

        

      }

    }
  });


 // get city ID

 let cityID = "5607916";
 let townsIndex = 5;
 
 // get upcoming events
 
 const eventsJSON = "https://byui-cit230.github.io/weather/data/towndata.json";
 fetch(eventsJSON) .then((response) => response.json()) .then((eventsObject) => {
     //console.log(eventsObject.towns[townsIndex]);
     let eventsSection = document.createElement("section");
     for (let i = 0; i < eventsObject.towns[townsIndex].events.length; i++) {
         //console.log(eventsObject.towns[townsIndex].events[i]);
         let newEvent = document.createElement("p");
         newEvent.textContent = eventsObject.towns[townsIndex].events[i];
         eventsSection.appendChild(newEvent);
     }
     document.getElementById("events").appendChild(eventsSection);
 });
 


