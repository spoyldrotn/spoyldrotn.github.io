function showBanner() {
    let j = new Date();
    let names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day =names[j.getDay()];
    
    if(day=="Thursday"){
        document.write("<div style='width: 100%; display: block;> <p>"Saturday is Preston Pancakes in the Park!  9:00 a.m. Saturday at the City Park Pavilion."</div>"
        
   
} else {
    document.getElementById("banner").style.display = "none";
}
console.log(dayname)
}

