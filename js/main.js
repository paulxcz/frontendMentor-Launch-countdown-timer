'use strict'


//Date
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');


//Flipers
const dayFliper = document.getElementById('day-fliper');
const hourFliper = document.getElementById('hour-fliper');
const minuteFliper = document.getElementById('minute-fliper');
const secondFliper = document.getElementById('second-fliper');

//textContent
const dayText = document.getElementById('day');
const hourText = document.getElementById('hour');
const minuteText = document.getElementById('minute');
const secondText = document.getElementById('second');


//values
let seconds = 59;
let minutes = 59;
let hours = 24;
let days = 8;


//set data in Layout
dayText.textContent = `0${days}`;
hourText.textContent = hours;
minute.textContent =  minutes;
second.textContent = seconds;


const moveFliper = (textContainer,fliper,value) =>{
    fliper.style.transform = 'rotateX(90deg)';
    textContainer.style.display = "none";
    setTimeout(()=>{
        if (value >= 10) {
            textContainer.textContent = value;
        }else{
            textContainer.textContent = `0${value}`;
        }
        
        fliper.style.transform = 'rotateX(360deg)';
    },135)
    setTimeout(()=>{
        if (fliper.style.transform == 'rotateX(360deg)') {
            textContainer.style.display = "";
        }   
    },200); 
}


const countDown = setInterval(() => {

    if (seconds > 0) {
        seconds--;
        moveFliper(secondText,secondFliper,seconds);
    }else if(minutes > 0){
        seconds = 59;
        moveFliper(secondText,secondFliper,seconds);
        minutes--;
        moveFliper(minuteText,minuteFliper,minutes);
    }else if (hours > 0) {
        seconds = 59;
        moveFliper(secondText,secondFliper,seconds);
        minutes = 59;
        moveFliper(minuteText,minuteFliper,minutes);
        hours --;
        moveFliper(hourText, hourFliper, hours);
    }else if (days > 0) {
        seconds = 59;
        moveFliper(secondText,secondFliper,seconds);
        minutes = 59;
        moveFliper(minuteText,minuteFliper,minutes);
        hours =24;
        moveFliper(hourText, hourFliper, hours);
        days--;
        moveFliper(dayText, dayFliper, days);
    }
}, 1000);

