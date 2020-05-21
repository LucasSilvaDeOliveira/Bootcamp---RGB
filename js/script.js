window.addEventListener("load", start);

function start() {
  inputValue();
  let square = document.querySelector("#square");
}

function inputValue() {
  function red() {
    let redDial = document.querySelector("#redDial");
    let red = document.querySelector("#red");
    red.value = redDial.value;
    redDial.focus();
    return red.value;
  }
  function green() {
    let greenDial = document.querySelector("#greenDial");
    let green = document.querySelector("#green");
    green.value = greenDial.value;
    return green.value;
  }
  function blue() {
    let blueDial = document.querySelector("#blueDial");
    let blue = document.querySelector("#blue");
    blue.value = blueDial.value;
    return blue.value;
  }
  function changeColor(r, g, b) {
    let square = document.querySelector("#square");
    square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
  red();
  green();
  blue();
  changeColor(red(), green(), blue());
}
