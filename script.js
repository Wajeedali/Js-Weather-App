// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0bf32d9b1msh0e92af2a3898b81p149102jsn012bc0a9a5c2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = city => {
	cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(res => res.json())
.then(res => {
  console.log(res)
  cloud_pct.innerHTML = res.cloud_pct
  temp.innerHTML = res.temp
	temp2.innerHTML = res.temp
  feels_like.innerHTML = res.feels_like
  humidity.innerHTML = res.humidity
	humidity2.innerHTML = res.humidity
  min_temp.innerHTML = res.min_temp
  max_temp.innerHTML = res.max_temp
  wind_speed.innerHTML = res.wind_speed
	wind_speed2.innerHTML = res.wind_speed
  // wind_degrees.innerHTML= res.wind_degrees
  sunrise.innerHTML = res.sunrise
  sunset.innerHTML = res.sunset
})
.catch(err => console.error(err))
}

submit.addEventListener('click', (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Dubai")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Madina', options)
.then(res => res.json())
.then(res => {
  console.log(res)
  madina_temp.innerHTML = res.temp
  madina_feels_like.innerHTML = res.feels_like
  madina_humidity.innerHTML = res.humidity
	madina_wind_speed.innerHTML = res.wind_speed
  // wind_degrees.innerHTML= res.wind_degrees
  sunrise.innerHTML = res.sunrise
  sunset.innerHTML = res.sunset
})
.catch(err => console.error(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
.then(res => res.json())
.then(res => {
  console.log(res)
  delhi_temp.innerHTML = res.temp
  delhi_feels_like.innerHTML = res.feels_like
  delhi_humidity.innerHTML = res.humidity
  delhi_wind_speed.innerHTML = res.wind_speed
  // wind_degrees.innerHTML= res.wind_degrees
  sunrise.innerHTML = res.sunrise
  sunset.innerHTML = res.sunset
})
.catch(err => console.error(err))

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
.then(res => res.json())
.then(res => {
  console.log(res)
  mumbai_temp.innerHTML = res.temp
  mumbai_feels_like.innerHTML = res.feels_like
  mumbai_humidity.innerHTML = res.humidity
	mumbai_wind_speed.innerHTML = res.wind_speed
  // wind_degrees.innerHTML= res.wind_degrees
  sunrise.innerHTML = res.sunrise
  sunset.innerHTML = res.sunset
})
.catch(err => console.error(err))