import { changeClass, disabledButton, validateInput } from "../functions.js";
function Exercise4(){
const number = document.querySelector(".number");
    const result = document.querySelector("#result4");
    const button = document.querySelector("#add_vetor2");
    disabledButton(button);
    number.addEventListener("input", () => validateInput([number], button));
    changeClass(result, "success")
    const arr = []
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Evita recarregar a página se for um botão dentro de <form>

        const inpt = Number(number.value)
        arr.push(inpt);
        result.innerHTML += `${inpt} `
        number.value = "";
        disabledButton(button);

        if (arr.length ===10) {
            number.disabled = true;
            disabledButton(button);

            let maior = arr[0];
            let menor = arr[0];
            let posMai = 0;
            let media = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > maior) {
                    maior = arr[i]
                    posMai = i
                }
                if (arr[i] < menor) menor = arr[i]

                media += arr[i]
            }
            let text = `<br><br><p>Soma: <b class="bld">${media}</b> - 
            Média: <b class="bld">${media/ arr.length}</b><br>
            Maior valor: <b class="bld">${maior}</b> - 
            Pos.º maior elemento:<b class="bld">${posMai}</b>
           <br>Menor valor:<b class="bld">${menor}</b></p> `
            result.innerHTML += text  
        }
    });
}
export{Exercise4}