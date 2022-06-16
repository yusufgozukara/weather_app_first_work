const search = document.querySelector('button');
const cityInput = document.querySelector('input');
const container = document.querySelector('div');

const getWeatherInfo = async () => {



    
    if (container.innerHTML.toLocaleLowerCase().includes(cityInput.value.toLocaleLowerCase())) {
        alert(cityInput.value + 'is already exist');
    }
    
    else {
        const key = '0a9365c373ba4ca67a35a8574c7593d0';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${key}`;   

    try {
        const response = await fetch(url);
        const weatherInfo = await response.json();
        console.log(weatherInfo);

        const {weather, main, name} = weatherInfo;

        // console.log(weather, main, name);
        container.innerHTML += `${name}<br>${weather[0].description}<br>${main.temp}&deg;C <br> <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"> <br>`;
    } 
    catch (error) {
        alert('There is not a city called ' + cityInput.value);
    }
    finally {
        cityInput.value = '';
    }
}
}

search.addEventListener('click', getWeatherInfo);


