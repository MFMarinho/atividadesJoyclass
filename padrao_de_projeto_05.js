// Classe Pato
class Pato {
    quack() {
      console.log("Quack! Quack!");
    }
  
    voar() {
      console.log("Voando como um pato");
    }
  }
  
  // Classe Galinha
  class Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  
    voarBaixo() {
      console.log("Voando baixo como uma galinha");
    }
  }
  
  // Classe AdaptadorPato
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.quack(); // Adaptando quack() para cacarejar()
    }
  
    voarBaixo() {
      this.pato.voar(); // Adaptando voar() para voarBaixo()
    }
  }
  
  // Classe AdaptadorPatoDemo
  class AdaptadorPatoDemo {
    static run() {
      const pato = new Pato();
      const adaptador = new AdaptadorPato(pato);
  
      console.log("Demonstração usando o adaptador para Galinha:");
      adaptador.cacarejar();
      adaptador.voarBaixo();
    }
  }
  
  // Executar a demonstração
  AdaptadorPatoDemo.run();
  