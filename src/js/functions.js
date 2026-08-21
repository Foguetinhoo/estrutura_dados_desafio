
function disabledButton(buttons, option = true) {
  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.disabled = option;
    });
  } else {
    buttons.disabled = option;
  }
}
function validateInput(element, buttons) {
  let val = 0;
  if (element.length > 0) {
    element.forEach((input) => {
      if (input.value === "") val++;
    });
    if (val > 0) disabledButton(buttons);
    else disabledButton(buttons, false);
  }
}

const changeClass = (element, newClass) => element.className = newClass;
 
export { disabledButton, changeClass, validateInput };
