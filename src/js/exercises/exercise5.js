import { changeClass, disabledButton, validateInput } from "../functions.js";
function Exercise5(){
    const number = document.querySelector(".number3");
    const search = document.querySelector(".search")
    const result = document.querySelector(".result5");
    const button = document.querySelector("#add_vetor3") ;
    disabledButton(button);
    changeClass(result, "success")
    number.addEventListener("input", () => validateInput([number], button));
    search.addEventListener("input", () => validateInput([search], button));
    const arr = []
    button.addEventListener("click", (e) => {
        e.preventDefault();     

        const inpt = Number(number.value)
        arr.push(inpt);

        result.innerHTML += `${inpt} `
        number.value = "";
        disabledButton(button);

        if (arr.length === 15
          ) {
            number.disabled = true;
            disabledButton(button);
          changeClass(search,"discob")
          changeClass(number,"search")
  
        }
    });
    search.addEventListener("input", e=>{
       let numb = Number(e.target.value)

       result.innerHTML =""
       let  cont = 0
        arr.forEach((value, index) => {
            if( numb == value){
                cont++
                result.innerHTML += `<span>Valor:<b class="bld">${value}</b> -Posição:<b class="bld">${index}</b></span><br>`
            }
           
        });
         result.innerHTML += `<spn>apareceu ${cont} vezes</span>`
    })
}
export{Exercise5}       