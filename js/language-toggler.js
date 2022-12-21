import { aboutEN, aboutIT } from "./about.txt.js";
import { professionEN, professionIT } from "./profession.txt.js";

let isDefault = true;

let toggler;
let about;
let profession;


window.onload = () => {

  toggler = document.getElementById("language-toggler");
  about = document.getElementById("about");
  profession = document.getElementById("profession");

  toggler.onclick = toggle;
}

function toggle() {
  if (isDefault) {
    setEN();
    isDefault = false;

  } else {
    setIT();
    isDefault = true;
  }
}

function setEN() {
  about.innerHTML = aboutEN;
  profession.innerHTML = professionEN;
  toggler.innerHTML = "IT"
}

function setIT() {
  about.innerHTML = aboutIT;
  profession.innerHTML = professionIT;
  toggler.innerHTML = "EN"
}
