import { Exercise1 } from "./exercises/exercise1.js";
const exercises = document.querySelectorAll(".exercise");
const exercisesDiv = document.querySelectorAll(".container > div");
 const result = document.querySelector(".result");
Exercise1(result)

if (exercisesDiv.length > 0) {
  exercisesDiv[0].classList.add("active");
}

exercises.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    exercises.forEach(item => item.classList.remove("active"));
    e.currentTarget.classList.add("active");

    exercisesDiv.forEach(div => div.classList.remove("active"));
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    
    const targetDiv = document.getElementById(targetId);

    if (targetDiv) {
      targetDiv.classList.add("active");
    }
  });
});
