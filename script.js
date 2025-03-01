// let search = document.getElementById("searchCity")
// let btn = document.getElementById("btn")
// let Name = document.getElementById("cityName")
// let humidity = document.getElementById("humidity")
// let wind = document.getElementById("wind")
// let temp = document.getElementById("temp")



// const apiKey = "6aa4c2a8a102ec1e554349181e69e80b"


// async function checkWeather(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data)

// }

// btn.addEventListener('click',()=>{
//    city.value.
//     checkWeather(city)
// })

let search = document.getElementById("searchCity")
let btn = document.getElementById("btn")

btn.addEventListener('click',()=>{
    const city = search.value;

    if(city){
        window.location.href =`weather-Details.html?city=${city}`;
    }
    else{
        alert("Please enter a city name!")
    }
});