let name = prompt("İsminizi Giriniz: ")
let greet = document.querySelector("#myName")
greet.innerHTML = `${name}`


let date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()

let days= ["Pazartesi", "Salı", "Çrşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
let dayName = days[date.getDay()]

let timeHour = hour + ":" + minute;

let time = document.querySelector("#myClock")
time.innerHTML = `${timeHour}, ${dayName} ${year}`

setTimeout(1000)
