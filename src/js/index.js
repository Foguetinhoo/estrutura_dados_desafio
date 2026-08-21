import { Exercise1, Exercise2, Exercise3 } from "./exercises/index.js";
const exercises = document.querySelectorAll(".exercise");
const exercisesDiv = document.querySelectorAll(".container > div");
let savedIndex = parseInt(localStorage.getItem("element_active"), 10);
Exercise1();
Exercise2()
Exercise3();

if (isNaN(savedIndex) || savedIndex >= exercises.length) {
  savedIndex = 0;
}

exercises.forEach(el => el.classList.remove("active"));
exercisesDiv.forEach(el => el.classList.remove("active"));

if (exercises[savedIndex] && exercisesDiv[savedIndex]) {
  exercises[savedIndex].classList.add("active");
  exercisesDiv[savedIndex].classList.add("active");
}

exercises.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    exercises.forEach((item) => item.classList.remove("active"));
    exercisesDiv.forEach((div) => div.classList.remove("active"));

    e.currentTarget.classList.add("active");
    
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetDiv = document.getElementById(targetId);

    if (targetDiv) {
      targetDiv.classList.add("active");
      localStorage.setItem("element_active", index);
    }
  });
});