import '@vitest/browser/matchers.d.ts'
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Models } from '../../../../shared/types/Cliente'
import ChartScore from './ChartScore'

const mockCliente: Models.Cliente = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  nomeCompleto: 'João Silva',
  cpf: '123.456.789-00',
  email: 'joao.silva@email.com',
  telefone: '(11) 98765-4321',
  endereco: {
    rua: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01000-000'
  },
  dataNascimento: '22/10/1980',
  dadosPagamento: {
    tipo: 'cartao',
    nrCartao: '4111 1111 1111 1111',
    validadeCartao: '12/27',
    cvv: '123'
  },
  score: 750,
  statusCredito: 'semiApto'
}

test("deve renderizar o ChartScore com status 'Apto'", async () => {
  const { getByTestId, getByText } = render(
    <ChartScore score={850} cliente={mockCliente} />
  )
  await expect.element(getByTestId('chart-score')).toBeInTheDocument()
  await expect.element(getByText('🥳 Apto')).toBeInTheDocument()
  await expect
    .element(getByText('João está apto para solicitar crédito!'))
    .toBeInTheDocument()
})

test("deve renderizar o ChartScore com status 'Apto Parcialmente'", async () => {
  const { getByText } = render(<ChartScore score={600} cliente={mockCliente} />)
  await expect.element(getByText('🙂 Apto Parcialmente')).toBeInTheDocument()
  await expect
    .element(getByText('João está parcialmente apto para solicitar crédito!'))
    .toBeInTheDocument()
})

test("deve renderizar o ChartScore com status 'Inapto'", async () => {
  const { getByText } = render(<ChartScore score={400} cliente={mockCliente} />)
  await expect.element(getByText('😢 Inapto')).toBeInTheDocument()
  await expect
    .element(getByText('João infelizmente não pode solicitar crédito.'))
    .toBeInTheDocument()
})
