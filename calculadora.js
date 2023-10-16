const readline = require("readline-sync");

function calculadora(num1,num2,operacao) {
    switch (operacao){ 
        case '+': 
            console.log(`${num1+num2}`)
            loop = false
            break;
        case '-':
            console.log(`${num1-num2}`);
            loop = false
            break;
        case '*':
            console.log(`${num1*num2}`);
            loop = false
            break;
        case '/':
            if(num1%num2===0){
                console.log(`${num1/num2}`);
            } else {
                console.log(parseInt(`${num1/num2}`));
                console.log(`Resto da divisão é ${num1%num2}`);
            }
            loop = false
            break;
        default:
            console.log("Operação inválida, insira os dados novamente...")
            loop = true;
        }
}

loop = false;

do{
    let num1 = readline.questionInt("Insira o primeiro número: ");
    let num2 = readline.questionInt("Insira o segundo número: ");
    let ope = readline.question("Insira uma das operações (+,-,*,/): ");

    calculadora(num1,num2,ope);
}while(loop === true);
