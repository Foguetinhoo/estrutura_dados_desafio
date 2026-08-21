import { changeClass, disabledButton, validateInput } from "../functions.js";

function Exercise1() {
  const buttons = document.querySelectorAll(".button_operate");
  const numberOne = document.querySelector(".number-one");
  const numberTwo = document.querySelector(".number-two");
  const result = document.querySelector("#result")
  disabledButton(buttons);
  numberOne.addEventListener("input", () =>
    validateInput([numberOne, numberTwo], buttons),
  );
  numberTwo.addEventListener("input", () =>
    validateInput([numberOne, numberTwo], buttons),
  );

  function Operate() {
    buttons.forEach((element) => {
      element.addEventListener("click", (e) => {
        result.innerHTML = "";
        const n1 = Number(numberOne.value);
        const n2 = Number(numberTwo.value);

        switch (e.currentTarget.id) {
          case "soma":
            changeClass(result, "success");
            result.innerHTML = `${n1 + n2}`;
            break;
          case "subtracao":
            changeClass(result, "success");
            result.innerHTML = `${n1 - n2}`;
            break;
          case "multiplicacao":
            changeClass(result, "success");
            result.innerHTML = `${n1 * n2}`;
            break;
          case "divisao":
            if (n2 === 0) {
              changeClass(result, "error");
              result.innerHTML = "Impossível divisão por ZERO!";
            } else {
              result.innerHTML = `${n1 / n2}`;
            }
            break;
        }
      });
    });
  }

  Operate();
}
export { Exercise1 };
