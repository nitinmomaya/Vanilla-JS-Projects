console.log("RUNNING JS FILE");
let Kilogram = document.querySelector(".Kilogram"),
  grams = document.querySelector(".grams"),
  Pounds = document.querySelector(".Pounds"),
  Ounces = document.querySelector(".Ounces"),
  form = document.querySelector("form");

form.addEventListener("input", convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains("Kilogram")) {
    let ans = e.target.value;

    grams.value = ans * 1000;
    Ounces.value = ans * 35.274;
    Pounds.value = ans * 2.2046;
  }
  if (e.target.classList.contains("Pounds")) {
    let ans = e.target.value;
    Kilogram.value = ans / 2.2046;
    grams.value = ans / 0.0022046;
    Ounces.value = ans * 16;
  }
  if (e.target.classList.contains("Ounces")) {
    let ans = e.target.value;
    Kilogram.value = ans / 35.274;
    grams.value = ans / 0.035274;
    Pounds.value = ans * 0.0625;
  }
  if (e.target.classList.contains("grams")) {
    let ans = e.target.value;
    Kilogram.value = ans / 1000;
    Pounds.value = ans / 0.035274;
    Ounces.value = ans * 0.035274;
  }
}
