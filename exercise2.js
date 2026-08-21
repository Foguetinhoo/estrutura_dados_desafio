import { changeClass, disabledButton, validateInput } from "../functions.js";

function Exercise2() {
  const name = document.querySelector(".name");
  const note = document.querySelector(".note");
  const button = document.querySelector(".button_verificate");
  const result = document.querySelector("#result2");
  disabledButton(button);

  name.addEventListener("input", () => validateInput([name, note], button));
  note.addEventListener("input", () => validateInput([name, note], button));
  note.addEventListener("input", (e) => {
    const note = Number(e.target.value);
    note < 0 || note > 10
      ? disabledButton(button)
      : disabledButton(button, false);
  });
  button.addEventListener("click", () => {
    const noteAl = Number(note.value);
    if (noteAl <= 5) {
      changeClass(result, "error");
      result.innerHTML = `Infelizmente o Sr(a) <b class="bld">${name.value}</b>, foi REPROVADO! <i class="fa-regular fa-face-sad-cry"></i>`;
    } else if (noteAl <= 6.9) {
      changeClass(result, "warning");
      result.innerHTML = `Sr(a) <b class="bld">${name.value}</b>, está de RECUPERAÇÃO! <i class="fa-solid fa-face-meh"></i>`;
    } else {
      changeClass(result, "success");
      result.innerHTML = `PARABÉNS Sr(a) <b class="bld">${name.value}</b>, foi APROVADO! <i class="fa-solid fa-face-smile"></i>`;
    }
    console.log(result)
  });
}

export { Exercise2 };
