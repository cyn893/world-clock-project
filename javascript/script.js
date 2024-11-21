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