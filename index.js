var lamp = document.getElementById("lamp");

function isBroken() {
  return lamp.src.indexOf("broken") > -1;
}

function turnOff() {
  if (!isBroken()) {
    lamp.src = "./images/off.svg";
  }
}

function turOn() {
  if (!isBroken()) {
    lamp.src = "./images/on.svg";
  }
}

lamp.addEventListener("click", broken);
function broken() {
    lamp.src = "./images/broken.svg";
}

function showNewLamp(){
    var newLampButton = document.getElementById('newlamp')
    newLampButton.style.display = 'block'
    button.style.display = 'block';
    button.style.marginLeft = 'auto';
    button.style.marginRight = 'auto';
}


function newLampOn(){
    lamp.src = "./images/on.svg";
    button.style.display = 'none'

}
