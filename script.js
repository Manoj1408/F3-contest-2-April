var fbutton = document.querySelector(".btn-fecth");
var x = document.querySelector('.location')
var lat = document.querySelector("#lat");
var long = document.querySelector("#long");
var map = document.querySelector(".map");
var weather = document.querySelector(".weather");
var plat;
var pLong;
var weatherData;

let apiKeys = {
  key: '5228fe7b1bf89ac82109a7eb0654d287',
  base: "https://api.openweathermap.org/data/2.5/",
};

fbutton.addEventListener('click', () => {
   fbutton.style.display='none';
   document.querySelector('.all').style.display = 'block'
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
    

});
function showPosition(position) {
    plat = position.coords.latitude;
    pLong = position.coords.longitude;
    // console.log(plat);
    initMap(plat, pLong);
    getWeather(plat, pLong);
  lat.innerHTML =
    "Latitude: " +
    position.coords.latitude;

    long.innerHTML = "Longitude: " +
    position.coords.longitude;
}

getWeather = async (latitude, longitude) => {
  const api_call = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKeys.key}`
  );
  const data = await api_call.json();
  weatherData = data;
  console.log("data is: ", weatherData); //this is the good stuff
  weather.innerHTML = `<p>Location:${data.name}</p>
        <p>Latitude:${data.coord.lat}</p>
        <p>Longitude:${data.coord.lon}</p>
        <p>TimeZone:${data.timezone}</p>
        <p>WindSpeed:${data.wind.speed}</p>
        <p>Pressure:${data.main.pressure}</p>
        <p>Humidity:${data.main.humidity}</p>
        <p>Wind Direction:${data.wind.deg}</p>
        <p>UV Index:10.12</p>
        <p>Feels LIke:${data.main.feels_like}</p>`;
};


function initMap(plat, pLong) {
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8280619081843!2d${pLong}!3d${plat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8cd0f71833%3A0x90dfbc111fda6c69!2sDK%20Gents%20PG!5e0!3m2!1sen!2sin!4v1682170800642!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}



// weather
// if (navigator.geolocation) {
//   this.getPosition()
//     .then((position) => {
//       this.getWeather(position.coords.latitude, position.coords.longitude);
//     })
//     .catch((err) => {
//       this.getWeather(28.67, 77.22);
//       alert("You have disabled location service.");
//     });
// } else {
//   alert("Geolocation not available");
// }



// getWeather = async (lat, lon) => {
//     console.log("first")
//       const api_call = await fetch(
//         `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
//       );
//       const data = await api_call.json();
//       console.log(data);
//     };

