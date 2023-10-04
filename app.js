const apiKey = "403fa5e044ea7fe3f29c2bfe6f63e77d";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const weatherIcon = document.querySelector('.weather-icon');

const displayWeather = async (cityName) => {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.container').style.display = "none"
    }
    else {

    const data = await response.json();
    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " m/s";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    if (data.weather[0].main === 'Rain') {
        weatherIcon.src = '/images/rain.png'
    } 
    else if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = '/images/clouds.png';
    }
    else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = '/images/clear.png';
    }
    else if (data.weather[0].main === 'Wind') {
        weatherIcon.src = '/images/wind.png';
    }
    else if (data.weather[0].main === 'Drizzle') {
        weatherIcon.src = '/images/drizzle.png';
    }
    else if (data.weather[0].main === 'Mist') {
        weatherIcon.src = '/images/mist.png';
    }

    document.querySelector('.container').style.display = "block"
    document.querySelector('.error').style.display = "none";
    }
    
}



const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');


searchBtn.addEventListener("click", (e) => { displayWeather(searchBox.value)});

searchBox.addEventListener('focus', () => {
    searchBox.style.outlineStyle = 'solid';
    searchBox.style.outlineWidth = '2px';
    searchBox.style.outlineColor = 'blue';

})


searchBox.addEventListener('blur', ()=> {
    searchBox.style.outlineStyle='none';
})