class UI {
    constructor(params) {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.country = weather.sys.country;
        this.location.textContent = `${weather.name}, ${this.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp}\xB0C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}\xB0C`;
        this.dewpoint.textContent = `Wind direction: ${weather.wind.deg} degrees`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} MPH`;
    }
}