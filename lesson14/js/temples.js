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

fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const prophets = jsonObject['prophets'];
  
    for (let i = 0; i < prophets.length; i++) {
  
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement("p");
    let image = document.createElement("img");
   
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets [i].order;
    birthdate.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
    birthplace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
   
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(image);

image.setAttribute('src', prophets[i].imageurl);
image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
document.querySelector('div.cards').appendChild(card);
}

});
