$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&appid=56485395a67deb23471d05ec84d176a9&lang=ru",
    function(data) {
        console.log(data);

        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;

        $(".icon").attr("src", icon);
        $(".temp").append(temp);
        $(".weather").append(weather);
    }
);