let d = new Date(document.lastModified);
let lastUpdate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
document.getElementById('lastUpdate').innerHTML = lastUpdate;
