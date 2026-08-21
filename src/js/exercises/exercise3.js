// Problema:
// Crie um vetor capaz de armazenar 10 números inteiros.
// O algoritmo deverá:
// 1. Ler os 10 valores;
// 2. Exibir os valores armazenados;
// 3. Calcular a soma;
// 4. Calcular a média;
// 5. Identificar o maior valor;
// 6. Identificar o menor valor.
// Desafio:
// Informar também a posição do maior elemento.
import { changeClass, disabledButton, validateInput } from "../functions.js";

function Exercise3() {
    const number = document.querySelector(".number");
    const result = document.querySelector("#result3");
    const button = document.querySelector("#add_vetor1");
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

            let impar = 0;
            let par = 0;
            let pos = 0;
            let neg = 0;
            for (let i = 0; i < arr.length; i++) {
                arr[i] % 2 === 0 ? par++ : impar++
                arr[i] >= 0 ? pos++ : neg++
            }
            let text = `<br><br><p>Num. Positivos: <b class="bld">${pos}</b> - 
            Num. Negativos: <b class="bld">${neg}</b><br>
            Num. Pares: <b class="bld">${par}</b> - 
            Num. Ímpares:<b class="bld">${impar}</b>`
            result.innerHTML += text
            

        }
    });
}
export { Exercise3 };
