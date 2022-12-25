let secondhand = document.querySelector("#second-hand");

let minutehand = document.querySelector("#minute-hand");

let hourhand = document.querySelector("#hour-hand");
// currentTime();


function currentTime(){
    let time = new Date();
    
    let second = time.getSeconds();

    let minute = time.getMinutes();

    let hour = time.getHours();

    // console.log(time);
    // console.log("hour ",hour);
    // console.log("minute ",minute );
    // console.log("seconds ",second);


    let timeInterval =6;

    secondhand.style.transform = 'rotate(' + (second * timeInterval) + 'deg)'
    minutehand.style.transform = 'rotate(' + (minute * timeInterval + second/10) + 'deg)'
    hourhand.style.transform = 'rotate(' + (hour *30 + minute / 2) + 'deg)'


}

setInterval(currentTime,100)