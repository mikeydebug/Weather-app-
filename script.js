const apikey ="fc0e1032d547cbfb055c299409c28812";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

const weathericon=document.querySelector(".weather-icon");






async function checkweather(city) {
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data  = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src ="images/clouds.png"

    }
    else if (data.weather[0].main == "Clear"){
        weathericon.src ="images/clear.png"

    }
    else if (data.weather[0].main == "Rain"){
        weathericon.src ="images/rain.png"

    }
    else if (data.weather[0].main == "Mist"){
        weathericon.src ="images/mist.png"

    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.src ="images/drizzle.png"

    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})
