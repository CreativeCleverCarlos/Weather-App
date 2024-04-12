
//

console.log("Hello World")

async function getWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=831cf2b10ac1459e9a3154716241204&q=london&aqi=no') ;
    const weatherData = await response.json();
    let test = weatherData.location
    console.log(test)
  }

getWeather()

  
//data.images.original.url;