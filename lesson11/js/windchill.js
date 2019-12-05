function windchill(weather, speed) {

    let t = weather;
    let s = speed;
    let tMax = 50;
    let sMin = 3;
    let f = 0;

    if (t < tMax && s > sMin) {
        f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        f = Math.round(f);

        document.getElementById("windchill").innerHTML = f + "&#176;F";
    } else {
        f = "N/A";
        document.getElementById("windchill").innerHTML = f;
    }
    //console.log("Current Temp = " + t + ", Wind Speed = " + s + ", Wind Chill = " + f)
}