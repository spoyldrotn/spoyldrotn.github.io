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
    let image = document.createElement("imageurl");
   
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname + ' ' + prophets [i].order;
    birthdate.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
    birthplace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
    
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(image);

image.setAttribute('src', prophets[i].imageurl);
image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname)
document.querySelector('div.cards').appendChild(card);
}

});



  