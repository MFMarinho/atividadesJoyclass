const readline = require("readline-sync");

function realizarDivisao(dividendo, divisor) {
    try {
        if (divisor === 0) {
            throw new Error("Divisão por zero não é permitida!");
        }

        let resultado = dividendo / divisor;
        return resultado;

    } catch (erro) {
        console.error("Erro:", erro.message);
    } finally {
        console.log("Bloco finally sempre é executado.");
    }
}

let dividendo = readline.questionFloat("Insira o dividendo: ");
let divisor = readline.questionFloat("Insira o divisor: ");

let resultado = realizarDivisao(dividendo, divisor);

if (resultado !== undefined) {
    console.log("Resultado da divisão:", resultado);
}