
export class Weather {

    constructor(city, countryCode) {
        this.apikey = '753805524c3ce4a3e7b4450a8741df15';
        this.city = city;
        this.countryCode = countryCode;
    }


    async getWeather() {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URL);

        const data = await response.json();
        return data;
    }
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}