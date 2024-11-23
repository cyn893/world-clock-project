function updateTime(){

let losAngelesElement = document.querySelector("#los-angeles .date")
let losAngelesTimeElement = document.querySelector("#los-angeles .time")
let losAngelesTime = moment().tz("America/Los_Angeles")

losAngelesElement.innerHTML = losAngelesTime.format("MMMM D YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

let sydneyElement = document.querySelector("#sydney .date");
let sydneyTimeElement = document.querySelector("#sydney .time");
let sydneyTime = moment().tz("Australia/Sydney")

sydneyElement.innerHTML = sydneyTime.format("MMMM D YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
        if ( cityTimeZone === "current") {
            cityTimeZone = moment.tz.guess();
        }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = `
            <div class="cities">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )}<small>${cityTime.format("A")}</small></div>
            </div>`;
}

let citySelectElement = document.querySelector("#city-select")
citySelectElement.addEventListener("change", updateCity)