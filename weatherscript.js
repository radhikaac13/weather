function fetchCityWeather(){
let cityName=id_weather.value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
then(res=>res.json()).
then(data=>populateWeatherDetails(data))

}

function populateWeatherDetails(data){

let placeName=data.name
let weatherType=data.weather[0].description
let temperature=data.main.temp
let humidity=data.main.humidity
let pressure=data.main.pressure
let windSpeed=data.wind.speed
console.log(placeName,weatherType,temperature,humidity,pressure);




let weatherData=`
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">City : ${placeName}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">WEATHER TYPE : ${weatherType}</li>
  <li class="list-group-item">TEMPERATURE : ${temperature}</li>
  <li class="list-group-item">HUMIDITY : ${humidity}</li>
  <li class="list-group-item">PRESSURE : ${pressure}</li>
  <li class="list-group-item">WIND SPEED : ${windSpeed}</li>


</ul>

</div>
`

output.innerHTML=weatherData

}


