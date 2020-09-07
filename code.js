var toShow = {
    country: "",
    name: "",
    tempMaxC: "",
    tempMaxF: "",
    tempMinC: "",
    tempMinF: "",
    feelsLikeC: "",
    feelsLikeF: "",
    weatherInC: "",
    weatherInF: "",
    weatherDesc: "",
    humidity: ""

};
function fromKelvinToC(num) {
    return Math.trunc(num - 273.15)
}
function fromKelvinToF(num) {
    return Math.trunc(num * 9 / 5 - 459.67);
}
const api = "e02e6211db9cb09be9ebb12394acf654";
function getPage(api, cityName) {
    return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + api)
        .then(response => response.json())
        .then(data => {
            return data;
        })


}
var city = "Moscow";
getPage(api, city).then(data => {
    console.log("inside smwhere")
    console.log(data)
    toShow.country = data.sys.country;
    toShow.name = data.name;
    toShow.feelsLikeC = fromKelvinToC(data.main.feels_like);
    toShow.weatherInC = fromKelvinToC(data.main.temp);
    toShow.tempMaxC = fromKelvinToC(data.main.temp_max);
    toShow.tempMinC = fromKelvinToC(data.main.temp_min);
    toShow.feelsLikeF = fromKelvinToF(data.main.feels_like);
    toShow.tempMaxF = fromKelvinToF(data.main.temp_max);
    toShow.tempMinF = fromKelvinToF(data.main.temp_min);
    toShow.weatherInF = fromKelvinToF(data.main.temp);
    toShow.humidity = (data.main.humidity + "%");
    dispose = data.weather[0];
    toShow.weather = dispose.main;
    toShow.weatherDesc = dispose.description;
});
console.log(toShow);

!ANCHOR
// //create table
// fill the table
// style the table