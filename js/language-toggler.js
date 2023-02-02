import { aboutEN, aboutIT } from "./about.txt.js";
import { professionEN, professionIT } from "./profession.txt.js";
import { exp1EN, exp1IT } from "./exp1.txt.js";
import { exp2EN, exp2IT } from "./exp2.txt.js";
import { exp3EN, exp3IT } from "./exp3.txt.js";
import { title2EN, title2IT } from "./title2.txt.js";
import { writeMeEN, writeMeIT } from "./writeMe.txt.js";
import { textAreaEN, textAreaIT } from "./textArea.txt.js";

let isDefault = true;

let toggler, about, profession;

let elements = [toggler, about, profession, exp1, exp2, exp3, title2, writeMe, textArea];
let elementsIds = ["language-toggler", "about", "profession", "exp1", "exp2", "exp3", "title2", "writeMe", "textArea"]

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
  elements[8].innerHTML = textAreaEN;
  elements[7].innerHTML = writeMeEN;
  elements[6].innerHTML = title2EN;
  elements[5].innerHTML = exp3EN;
  elements[4].innerHTML = exp2EN;
  elements[3].innerHTML = exp1EN;
  elements[1].innerHTML = aboutEN;
  elements[2].innerHTML = professionEN;
  elements[0].innerHTML = "IT";
}

function setIT() {
  elements[8].innerHTML = textAreaIT;
  elements[7].innerHTML = writeMeIT;
  elements[6].innerHTML = title2IT;
  elements[5].innerHTML = exp3IT;
  elements[4].innerHTML = exp2IT;
  elements[3].innerHTML = exp1IT;
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

function getAnimationKeyFrame() {
  let s = "";
  for (let i = 0; i < 101; i++) {
    s += `  ${i}%\n`;
    s += `    background: linear-gradient($black, $black) padding-box, radial-gradient(at 45% 55%, $purple ${100 - i}%, transparent) border-box\n`
  }
  console.log(s);
}

getAnimationKeyFrame();
