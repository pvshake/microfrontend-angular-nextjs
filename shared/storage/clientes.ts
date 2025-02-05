import { Models } from "../types/Cliente";
import { v4 as uuidv4 } from "uuid";
import { clientesMock } from "../data/mockData";

const STORAGE_KEY = "clientes";

export function loadMockClientes(): void {
  const clientes = localStorage.getItem(STORAGE_KEY);

  if (!clientes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientesMock));
    console.log("Clientes carragados com sucesso!");
  }
}

export function getClientes(): Models.Cliente[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function getCliente(id: string): Models.Cliente | null {
  const clientes = getClientes() || [];

  return clientes.find((cliente) => String(cliente.id) === String(id)) || null;
}

export function filterClientes(
  query: string,
  filtros?: Partial<Models.Cliente>
): Models.Cliente[] {
  const clientes = getClientes();
  const searchQuery = query.toLowerCase();

  return clientes.filter((cliente) => {
    const nomeMatch = cliente.nomeCompleto.toLowerCase().includes(searchQuery);
    const cpfMatch = cliente.cpf.includes(searchQuery);
    const emailMatch = cliente.email.toLowerCase().includes(searchQuery);

    let filtrosMatch = true;
    if (filtros) {
      if (filtros.nomeCompleto) {
        filtrosMatch =
          filtrosMatch &&
          cliente.nomeCompleto
            .toLowerCase()
            .includes(filtros.nomeCompleto.toLowerCase());
      }
      if (filtros.cpf) {
        filtrosMatch = filtrosMatch && cliente.cpf.includes(filtros.cpf);
      }
      if (filtros.email) {
        filtrosMatch =
          filtrosMatch &&
          cliente.email.toLowerCase().includes(filtros.email.toLowerCase());
      }
      if (filtros.score !== undefined) {
        filtrosMatch = filtrosMatch && cliente.score === filtros.score;
      }
      if (filtros.statusCredito) {
        filtrosMatch =
          filtrosMatch && cliente.statusCredito === filtros.statusCredito;
      }
    }

    return (nomeMatch || cpfMatch || emailMatch) && filtrosMatch;
  });
}

export function postCliente(
  cliente: Omit<Models.Cliente, "id" | "statusCredito">
): Models.Cliente {
  const clientes = getClientes();

  const score = Math.floor(Math.random() * 1000);
  let statusCredito = "inapto";

  if (score >= 500 && score < 800) {
    statusCredito = "semiApto";
  } else if (score >= 800) {
    statusCredito = "apto";
  } else {
    statusCredito = "inapto";
  }

  const newCliente = {
    ...cliente,
    id: uuidv4(),
    score,
    statusCredito,
  } as Models.Cliente;

  clientes.push(newCliente);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));

  return newCliente;
}

export function patchCliente(
  id: string,
  dadosAtualizados: Partial<Omit<Models.Cliente, "id">>
): Models.Cliente | null {
  let clientes = getClientes();
  const i = clientes.findIndex((cliente) => cliente.id === id);

  if (i === -1) return null;

  const clienteAtualizado = { ...clientes[i], ...dadosAtualizados };

  if (dadosAtualizados.score !== undefined) {
    if (dadosAtualizados.score < 500)
      clienteAtualizado.statusCredito = "inapto";
    else if (dadosAtualizados.score < 800)
      clienteAtualizado.statusCredito = "semiApto";
    else clienteAtualizado.statusCredito = "apto";
  }

  clientes[i] = clienteAtualizado;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));

  return clienteAtualizado;
}
