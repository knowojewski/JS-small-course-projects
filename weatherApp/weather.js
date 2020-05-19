class Weather {
    constructor(city, country) {
        this.apiKey = 'de1b8541a2e96d2edf424da5d7eeb360';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);
       
        const responseData = await weatherResponse.json();
        console.log(responseData);
        return responseData; 
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}

