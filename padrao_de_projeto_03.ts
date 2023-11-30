class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senhaSuperSecreta123";
  
    private constructor() {}
  
    public static getInstancia(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!");
      } else {
        console.log("Acesso negado. Senha incorreta.");
      }
    }
  }
  
  // Programa principal
  const sistemaSeguranca = SistemaSeguranca.getInstancia();
  
  // Agente tenta acessar a Base Secreta
  sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado. Senha incorreta.
  
  // Agente insere a senha correta
  sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta123"); // Acesso concedido à Base Secreta!
  