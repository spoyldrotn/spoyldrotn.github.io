const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const temples = jsonObject["temples"];

for (let i = 0; i < temples.length; i++ ) {

    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let motto = document.createElement("h3");
    let founded = document.createElement("p");
    let population = document.createElement("p");
    let rain = document.createElement("p");
    let image = document.createElement("img");

    if (temples[i].name == "Logan, Utah Temple" ||temples[i].name == "Rome, Italy Temple" || temples[i].name== "Laie, Hawaii Temple")

   { h2.textContent = temples[i].name;
    motto.textContent = temples[i].motto;
    founded.textContent = 'Year Founded: ' + temples[i].yearFounded;
    population.textContent = 'Population: ' + temples[i].currentPopulation;
    rain.textContent = 'Annual Rainfall: ' + temples[i].averageRainfall + '"';
   
    image.setAttribute('src', 'images/' + temples[i].photo);
    image.setAttribute('alt', temples[i].name);
    
    card.appendChild(h2);
    card.appendChild(motto);
    card.appendChild(founded);
    card.appendChild(population);
    card.appendChild(rain);
    card.appendChild(image);
  
    document.querySelector('div.temples').appendChild(card);
   }
   
  
    
}
});
