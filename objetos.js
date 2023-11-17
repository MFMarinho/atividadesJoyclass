var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    anoFabricacao: 2022,

    ligar: function() {
        console.log("O carro está ligado.");
    },

    acelerar: function() {
        console.log("O carro está acelerando.");
    },

    frear: function() {
        console.log("O carro está freando.");
    }
};


var livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    numeroPaginas: 320,

    abrir: function() {
        console.log("O livro foi aberto.");
    },

    fechar: function() {
        console.log("O livro foi fechado.");
    },

    ler: function() {
        console.log("Alguém está lendo o livro.");
    }
};

var tarefa = {
    descricao: "Estudar JavaScript",
    prioridade: "Alta",
    status: "Pendente",

    adicionarNota: function(nota) {
        console.log("Nota adicionada à tarefa: " + nota);
    },

    marcarConcluida: function() {
        this.status = "Concluída";
        console.log("Tarefa marcada como concluída.");
    },

    exibirDetalhes: function() {
        console.log("Descrição: " + this.descricao);
        console.log("Prioridade: " + this.prioridade);
        console.log("Status: " + this.status);
    }
};


let calendario = {
    ano: 2023,
    mes: 11,
    dia: 17,

    avancarDia: function() {
        this.dia++;
        console.log("Avançou para o próximo dia. Data atual: " + this.dia + "/" + this.mes + "/" + this.ano);
    },

    retrocederDia: function() {
        this.dia--;
        console.log("Retrocedeu para o dia anterior. Data atual: " + this.dia + "/" + this.mes + "/" + this.ano);
    },
    
    exibirData: function() {
        console.log("Data atual: " + this.dia + "/" + this.mes + "/" + this.ano);
    }
};


carro.ligar();
livro.ler();
calendario.avancarDia();
tarefa.adicionarNota("Revisar a seção sobre objetos em JavaScript.");
tarefa.exibirDetalhes();
tarefa.marcarConcluida();
tarefa.exibirDetalhes();