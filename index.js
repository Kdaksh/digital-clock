const time = ()=>{
    let hour = new Date().getHours()
    let ampm = hour >=12?`PM`:`AM`
    hour = hour >= 12?hour-12:hour;
    hour = hour <10?`0${hour}`:hour;

    let minutes = new Date().getMinutes()
    minutes = minutes < 10?`0${minutes}`:minutes;
    let seconds = new Date().getSeconds()
    seconds = seconds < 10?`0${seconds}`:seconds;
   document.getElementById('hour').innerText = hour
   document.getElementById('ampm').innerText = ampm
   document.getElementById('minute').innerText = minutes
   document.getElementById('seconds').innerText = seconds
}
setInterval(() => {
    time()
}, 0);