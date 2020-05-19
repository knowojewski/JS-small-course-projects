// init storage object
const storage = new Storage();

const weatherLocation = storage.getLocationData();

// init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// init UI object
const ui = new UI();

//weather.changeLocation('Warszawa', 'PL');
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('state').value;

    weather.changeLocation(city, country);

    storage.setLocationData(city, country);

    getWeather();

    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

