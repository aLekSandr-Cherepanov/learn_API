$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&appid=56485395a67deb23471d05ec84d176a9&lang=ru",
    function(data) {
        console.log(data);

        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon)
    }
);