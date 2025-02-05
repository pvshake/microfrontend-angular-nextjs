import { Models } from "../types/Cliente";

export const clientesMock: Models.Cliente[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    nomeCompleto: "João Silva",
    cpf: "123.456.789-00",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
    endereco: {
      rua: "Rua das Flores, 123",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01000-000",
    },
    dataNascimento: "22/10/1980",
    dadosPagamento: {
      tipo: "cartao",
      nrCartao: "4111 1111 1111 1111",
      validadeCartao: "12/27",
      cvv: "123",
    },
    score: 750,
    statusCredito: "semiApto",
  },
  {
    id: "e29b8400-550e-41d4-a716-446655440000",
    nomeCompleto: "Maria Souza",
    cpf: "987.654.321-00",
    email: "maria.souza@email.com",
    telefone: "(21) 91234-5678",
    endereco: {
      rua: "Avenida Paulista, 456",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01310-000",
    },
    dataNascimento: "15/07/1990",
    dadosPagamento: {
      tipo: "pix",
      chavePix: "maria.souza@email.com",
    },
    score: 480,
    statusCredito: "inapto",
  },
];
