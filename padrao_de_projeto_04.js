// Interface para os sanduíches
class Sanduiche {
    getDescricao() {
      return "Sanduíche";
    }
  
    getCusto() {
      return 0;
    }
  }
  
  // Implementação do sanduíche de frango assado
  class FrangoAssado extends Sanduiche {
    getDescricao() {
      return "Sanduíche de Frango Assado";
    }
  
    getCusto() {
      return 4.50;
    }
  }
  
  // Decorator para adicionar pepperoni
  class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    getDescricao() {
      return this.sanduiche.getDescricao() + ", Pepperoni";
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  // Decorator para adicionar queijo mussarela ralado
  class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    getDescricao() {
      return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 2.00;
    }
  }
  
  // Cliente
  function main() {
    // Cria um sanduíche de frango assado
    let sanduiche = new FrangoAssado();
  
    // Adiciona pepperoni
    sanduiche = new Pepperoni(sanduiche);
  
    // Adiciona queijo mussarela ralado
    sanduiche = new QueijoMussarelaRalado(sanduiche);
  
    // Imprime a descrição e o custo do sanduíche final
    console.log(`${sanduiche.getDescricao()} custa $${sanduiche.getCusto().toFixed(2)}.`);
  }
  
  // Executa o cliente
  main();
  