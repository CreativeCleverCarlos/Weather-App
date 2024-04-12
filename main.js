
//

console.log("Hello World")



//this works as intended. It makes a request to the the site weatherAPI and now collects data from specifically London Ontario.

async function getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=831cf2b10ac1459e9a3154716241204&q=${inputHolder[0]}&aqi=no`) ;
    const weatherData = await response.json();
    let test = weatherData.location
    console.log(test)
  }



//Now, i need to set it up so that this runs, only AFTER a the location is given...


//getting a location typed in
let inputHolder = []

function inputLocation(location){
    inputHolder.push(location)
    console.log(inputHolder[0])
}



inputLocation("brampton")

getWeather()



