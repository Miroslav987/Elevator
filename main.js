let elevator = document.getElementById("elevator");
let item = document.getElementById("item");
let floor = 0;
function block() {
  elevator.style.bottom = `${floor}px`;
}
btn1.addEventListener("click", () => {
  floor = 10;
  block();
  elevator.innerText = "1";
  elevator.style.transition = "3s";
});
btn2.addEventListener("click", () => {
  floor = 50;
  block();
  elevator.innerText = "2";
  elevator.style.transition = "3s";
});

btn3.addEventListener("click", () => {
  floor = 90;
  block();
  elevator.innerText = "3";
  elevator.style.transition = "3s";
});
btn4.addEventListener("click", () => {
  floor = 130;
  block();
  elevator.innerText = "4";
  elevator.style.transition = "3s";
});
btn5.addEventListener("click", () => {
  floor = 170;
  block();
  elevator.innerText = "5";
  elevator.style.transition = "3s";
});
btn6.addEventListener("click", () => {
  floor = 210;
  block();
  elevator.innerText = "6";
  elevator.style.transition = "3s";
});
btn7.addEventListener("click", () => {
  floor = 250;
  block();
  elevator.innerText = "7";
  elevator.style.transition = "3s";
});
btn8.addEventListener("click", () => {
  floor = 290;
  block();
  elevator.innerText = "8";
  elevator.style.transition = "3s";
});
btn9.addEventListener("click", () => {
  floor = 330;
  block();
  elevator.innerText = "9";
  elevator.style.transition = "3s";
});
btn10.addEventListener("click", () => {
  floor = 370;
  block();
  elevator.innerText = "10";
  elevator.style.transition = "3s";
});
btn11.addEventListener("click", () => {
  floor = 410;
  block();
  elevator.innerText = "11";
  elevator.style.transition = "3s";
});
btn12.addEventListener("click", () => {
  floor = 450;
  block();
  elevator.innerText = "12";
  elevator.style.transition = "3s";
});
btn13.addEventListener("click", () => {
  floor = 490;
  block();
  elevator.innerText = "13";
  elevator.style.transition = "3s";
});
btn14.addEventListener("click", () => {
  floor = 530;
  block();
  elevator.innerText = "14";
  elevator.style.transition = "3s";
});
btn15.addEventListener("click", () => {
  floor = 570;
  block();
  elevator.innerText = "15";
  elevator.style.transition = "3s";
});
btn16.addEventListener("click", () => {
  floor = 610;
  block();
  elevator.innerText = "16";
  elevator.style.transition = "3s";
});
