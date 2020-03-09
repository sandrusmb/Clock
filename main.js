"use strict";

const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

//segundos

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = ` translateX(15px) rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  console.log(minutes);
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `translateX(35px) rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  console.log(hours);
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `translateX(65px) translateY(-2px) rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
