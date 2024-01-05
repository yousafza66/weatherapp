function fetchWeather(city){
    apiKey= 'ddfbf44d723c4ac7a57175206240301';
    fetch('http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+city+'&aqi=no', {mode: 'cors'})
        .then(function(response){
            //Successful response
            return response.json(); //returns a promise
        })
        .then(function(data){
            console.log('works');
            displayWeather(data);
        })
        .catch(function(err){
            //Error
            console.log('error',err)
        });

}

function displayWeather(data){
    const { name }= data.location;
    const { text }= data.current.condition;
    const { temp_c }= data.current;
    const { humidity } = data.current;
    const { wind_kph } = data.current;
    const { icon }= data.current.condition;

    console.log(name, text, temp_c, humidity, wind_kph, icon);
    document.querySelector(".city").innerText = "Weather in "+ name;
    document.querySelector(".icon").src= icon;
    document.querySelector(".description").innerText= text;
    document.querySelector(".temp").innerText= temp_c +"°C";
    document.querySelector(".humidity").innerText= "Humidity: "+humidity+"%";
    document.querySelector(".wind").innerText= "Wind speed: "+wind_kph+"km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+name+"')"
}

function search(){
    fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector(".search button").addEventListener("click", function(){
    search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        search();
    }
})
fetchWeather("Toronto");

