let apikey = "adb4676581b7a9b11a6c8ae382b6dcf3";
function getweather() {
    let cityname = document.querySelector("#cityname").value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}units=matrix`)
        .then(function (response) {
            document.querySelector("#data").innerHTML = `${response.data.name} Temp is ${response.data.main.temp}°C`;
            console.log(response.data);
        })
        .catch(function (error) {
            // document.querySelector("#Wdata").innerHTML = error
            console.log(error);
        })
}
getweather()
