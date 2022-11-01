let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let input = document.getElementById("input");
button.addEventListener("click", function sectomin() {
  let a = parseInt(input.value, 10);
  input.value = a / 60;
});
button2.addEventListener("click", function mstokmh() {
  let a = parseInt(input.value, 10);
  input.value = (a / 3600) * 1000;
});
button3.addEventListener("click", function ten() {
  let a = parseInt(input.value, 10);
  input.value = (a >>> 0).toString(2) + ", " + (a >>> 0).toString(8);
});

function sectomin(a) {
  console.log(a / 60);
}

function mstokmh(a) {
  console.log((a / 3600) * 1000);
}

function ten(a) {
  let i = "";
  let b = "";
  console.log((a >>> 0).toString(2), (a >>> 0).toString(8));
}
