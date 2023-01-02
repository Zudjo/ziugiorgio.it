import { aboutEN, aboutIT } from "./about.txt.js";
import { professionEN, professionIT } from "./profession.txt.js";

let isDefault = true;

let toggler, about, profession;

let elements = [toggler, about, profession];
let elementsIds = ["language-toggler", "about", "profession"]

window.onload = () => {

  getElements();

  elements[0].onclick = toggle;
}

function getElements() {
  for (let i = 0; i < elements.length; i++) {
    elements[i] = document.getElementById(elementsIds[i]);
  }
}

function toggle() {
  elements[0].style.setProperty("cursor", "default");
  elements[0].disabled = true;
  animate();
}

function setLanguage() {
  if (isDefault) {
    setEN();
    isDefault = false;

  } else {
    setIT();
    isDefault = true;
  }
}

function setEN() {
  elements[1].innerHTML = aboutEN;
  elements[2].innerHTML = professionEN;
  elements[0].innerHTML = "IT";
}

function setIT() {
  elements[1].innerHTML = aboutIT;
  elements[2].innerHTML = professionIT;
  elements[0].innerHTML = "EN";
}

function animate() {


  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("animation");
  }

  setTimeout(() => {
    setLanguage();
  }, 500);

  setTimeout(() => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("animation");
    }
    elements[0].disabled = false;
    elements[0].style.setProperty("cursor", "pointer");
  }, 1000);



}
