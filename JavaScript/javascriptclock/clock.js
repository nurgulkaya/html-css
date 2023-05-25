let name = prompt("İsminizi Giriniz: ")
let greet = document.querySelector("#myName")
greet.innerHTML = `${name}`

function clock(){

    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let year = date.getFullYear()

    let days= ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let dayName = days[date.getDay()]

    let timeHour = hour + ":" + minute + ":" + second;

    let time = document.querySelector("#myClock")
    time.innerHTML = `${timeHour}, ${dayName} ${year}`
}
setInterval(clock, 1000)
