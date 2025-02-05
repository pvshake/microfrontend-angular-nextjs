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

export function filterClientes(query: string): Models.Cliente[] {
  const clientes = getClientes();
  const searchQuery = query.toLowerCase();

  return clientes.filter(
    (cliente) =>
      cliente.nomeCompleto.toLowerCase().includes(searchQuery) ||
      cliente.cpf.includes(searchQuery) ||
      cliente.email.toLowerCase().includes(searchQuery)
  );
}

export function postCliente(
  cliente: Omit<Models.Cliente, "id" | "statusCredito">
): Models.Cliente {
  const clientes = getClientes();

  const score = cliente.score;
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
