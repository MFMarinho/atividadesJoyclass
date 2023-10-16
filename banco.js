const readline = require ("readline-sync");

class Banco {
    constructor(conta, saldo, tipo) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = 6029;
    }

    buscarSaldo() {
        console.log(`Seu saldo é ${this.saldo}.`);
    }

    saque() {
        let valorSaque = readline.questionFloat("Informe o valor do saque: ");
        if (valorSaque > this.saldo) {
            console.log("Você não possui esse valor para saque.");
        } else {
            this.saldo -= valorSaque;
            console.log("Saque efetuado com sucesso.");
            console.log(`Seu saldo atual é ${this.saldo}`);
        }
    };

    deposito() {
        let valorDeposito = readline.questionFloat("Informe o valor do depósito: ");
        this.saldo += valorDeposito;
        console.log("Depósito efetuado com sucesso.");
        console.log(`Seu saldo atual é ${this.saldo}`);
    };

    numConta() {
        console.log(`O número da conta é ${this.conta}.`);
    };
}


var matheus = new Banco (19019, 200, "Corrente");

matheus.buscarSaldo();
matheus.deposito();
matheus.saque();
matheus.numConta();