setInterval(setClock, 1000);

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(document.getElementById('hour'), hoursRatio);
  setRotation(document.getElementById('minute'), minutesRatio);
  setRotation(document.getElementById('second'), secondsRatio);
}

function setRotation(element, rotationRatio) {
  element.style.transform = `rotate(${rotationRatio * 360}deg)`;
}
