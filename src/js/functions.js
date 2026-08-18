function disabledButton(buttons, option = true) {
  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.disabled = option;
    });
  }
}
function validateInput(e,buttons) {

  let val = 0;
  e.forEach((input) => {
    if (input.value === "") val++;
  });
  if (val > 0) disabledButton(buttons);
  else disabledButton(buttons, false);
}
function changeClass(element, op = true) {
  if (op) {
    element.classList.remove("error");
    element.classList.add("success");
  } else {
    element.classList.remove("success");
    element.classList.add("error");
  }
}
export { disabledButton, changeClass,validateInput };
