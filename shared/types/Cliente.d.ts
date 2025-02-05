export namespace Models {
  interface Cliente {
    id: string;
    nomeCompleto: string;
    cpf: string;
    email: string;
    telefone: string;
    dataNascimento: string;
    endereco: Models.Cliente.Endereco;
    dadosPagamento: Models.Cliente.DadosPagamento;
    score: number;
    statusCredito: "inapto" | "semiApto" | "apto";
  }

  namespace Cliente {
    interface Endereco {
      rua: string;
      cidade: string;
      estado: string;
      cep: string;
    }

    interface DadosPagamento {
      tipo: "cartao" | "boleto" | "pix";
      nrCartao?: string;
      validadeCartao?: string;
      cvv?: string;
      cdBoleto?: string;
      chavePix?: string;
    }
  }
}
