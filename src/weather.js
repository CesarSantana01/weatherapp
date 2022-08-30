const defaultLocation = document.getElementById("location")
//cell 1
const currentWeather = document.getElementById("currentWeather")
const temperature = document.getElementById("temperature")
//cell 2
const feelsLike = document.getElementById("feelsLike")
const windSpeeds = document.getElementById("windSpeeds")
const humidity = document.getElementById("humidity")
const highLow = document.getElementById("highLow")
//cell 4
const dateTime = document.getElementById("dateTime")
const date = document.getElementById("date")
const time = document.getElementById("time")

export async function getDefaultWeather(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=42.519539&lon=-70.896713&appid=1ca70e264b362a15149089d56727ab2d&units=imperial', {mode:"cors"})
    const location = await response.json()

    defaultLocation.innerHTML = (`${location.name}`)
    
    currentWeather.innerHTML = getCloud(`${location.clouds.all}`)
    temperature.innerHTML = `${Math.round(location.main.temp)}°`

    feelsLike.innerHTML = (`feels like<br> ${Math.round(location.main.feels_like)}°`)
    windSpeeds.innerHTML = (`wind speed<br> ${Math.round(location.wind.speed *10)/10} mp/h`)
    humidity.innerHTML = (`humidity:<br> ${location.main.humidity}%`)
    highLow.innerHTML = (`daily high/low:<br> ${Math.round(location.main.temp_max)}°/${Math.round(location.main.temp_min)}°`)
}

export function getTime(){
    date.innerHTML = new Date().toLocaleDateString()
    time.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setInterval(() => {
        date.innerHTML = new Date().toLocaleDateString()
        time.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }, 10000);
}

export async function getWeather(){
    
    const inputResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${document.getElementById("inputLocation").value}&limit=1&appid=1ca70e264b362a15149089d56727ab2d`, {mode:"cors"})
    const inputLocation = await inputResponse.json()

    try{const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${inputLocation[0].lat}&lon=${inputLocation[0].lon}&appid=1ca70e264b362a15149089d56727ab2d&units=imperial`, {mode:"cors"})
    const location = await response.json()
    console.log(location)


    defaultLocation.innerHTML = (`${location.name}`)
    
    currentWeather.innerHTML = getCloud(`${location.clouds.all}`)
    temperature.innerHTML = `${Math.round(location.main.temp)}°`

    feelsLike.innerHTML = (`feels like<br> ${Math.round(location.main.feels_like)}°`)
    windSpeeds.innerHTML = (`wind speed<br> ${Math.round(location.wind.speed *10)/10} mp/h`)
    humidity.innerHTML = (`humidity:<br> ${location.main.humidity}%`)
    highLow.innerHTML = (`daily high/low:<br> ${Math.round(location.main.temp_max)}°/${Math.round(location.main.temp_min)}°`)

    date.innerHTML = new Date().toLocaleDateString()
    time.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    }catch(err){
    console.log(err)
}
}

function getCloud(percent){
    let cloud;
if(percent>=0 && percent<=10){
    cloud = "Clear Skies"
}else if(percent>10 && percent<=30){
    cloud = "Mostly Clear"
}else if(percent>30 && percent<=50){
    cloud = "Partly Cloudy"
}else if(percent>50 && percent<=80){
    cloud = "Partly Clear"
}else if(percent>80 && percent<=90){
    cloud = "Mostly Cloudy"
}else if(percent>90 && percent<=100){
    cloud = "Cloudy"
}
return cloud;
}

export function getBackground(){
    const content = document.getElementById("content");
    // const time = (new Date().toLocaleTimeString([], { hour: '2-digit'}))
    const time ="07 AM"
    
    if(time == "06 AM" || time == "07 AM" || time == "08 AM" || time == "09 AM" || time == "10 AM" || time == "11 AM"){
        content.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/05/04/15/27/cabin-3374201_1280.jpg)"
        content.style.color = "black"

    }else if(time == "12 PM" || time == "01 PM" || time == "02 PM" || time == "03 PM" || time == "04 PM" || time == "05 PM" || time == "06 PM" || time == "07 PM" || time == "08 PM"){
        content.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_1280.jpg)"
        content.style.color = "white"
        
    }else{
        content.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_1280.jpg)"
        content.style.color = "rgba(255, 255, 255, 0.81)"
    }

}


