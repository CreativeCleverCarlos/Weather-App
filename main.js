
//

//this works as intended. It makes a request to the the site weatherAPI and now collects data from specifically London Ontario.

async function getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=831cf2b10ac1459e9a3154716241204&q=${inputHolder[0]}&aqi=no`) ;
    const weatherData = await response.json();


  }

  
  let inputHolder = []

function inputLocation(location){
    inputHolder.push(location)
    console.log(inputHolder[0])
}



inputLocation("brampton")

getWeather()

console.log(getWeather())

/** 
 To potentially use later
 let location = weatherData.location.name;
    let region = weatherData.location.region;
    let country = weatherData.location.region;
    let localTime = weatherData.location.localtime;
    let temp_celsius = weatherData.current.temp_c;
    let temp_fehrenheit = weatherData.current.temp_f;
    let condition = weatherData.current.condition.text;
    let humidity = weatherData.current.humidity;
    let windSpeed = weatherData.current.wind_kph;
    let precipitation = weatherData.current.precip_mm;
    return {
        location, region, country, localTime, temp_celsius, temp_fehrenheit, condition, humidity, windSpeed, precipitation
    }
**/



//Now, i need to set it up so that this runs, only AFTER a the location is given...


//getting a location typed in
