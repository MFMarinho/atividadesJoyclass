// Classe abstrata Veiculo
function Veiculo(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }
  
  Veiculo.prototype.clone = function () {
    return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
  };
  
  Veiculo.prototype.represent = function () {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
  };
  
  // Subclasse Carro
  function Carro(modelo, marca, cor, numeroRodas, numeroPortas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }
  
  Carro.prototype = Object.create(Veiculo.prototype);
  Carro.prototype.constructor = Carro;
  
  Carro.prototype.represent = function () {
    return `${Veiculo.prototype.represent.call(this)}, Número de Portas: ${this.numeroPortas}`;
  };
  
  // Subclasse Moto
  function Moto(modelo, marca, cor, numeroRodas, cilindradas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.cilindradas = cilindradas;
  }
  
  Moto.prototype = Object.create(Veiculo.prototype);
  Moto.prototype.constructor = Moto;
  
  Moto.prototype.represent = function () {
    return `${Veiculo.prototype.represent.call(this)}, Cilindradas: ${this.cilindradas}`;
  };
  
  // Classe Aplicação
  function Aplicacao() {
    this.veiculos = [];
  
    for (let i = 0; i < 3; i++) {
      this.veiculos.push(new Carro(`Carro${i}`, 'MarcaA', 'Azul', 4, 4 + i));
      this.veiculos.push(new Moto(`Moto${i}`, 'MarcaB', 'Vermelho', 2, 200 + i * 50));
    }
  }
  
  Aplicacao.prototype.clonarVeiculos = function () {
    return this.veiculos.map(function (veiculo) {
      return veiculo.clone();
    });
  };
  
  Aplicacao.prototype.imprimirRepresentacaoClones = function () {
    const clones = this.clonarVeiculos();
  
    clones.forEach(function (clone) {
      console.log(clone.represent());
    });
  };
  
  const app = new Aplicacao();
  
  app.imprimirRepresentacaoClones();