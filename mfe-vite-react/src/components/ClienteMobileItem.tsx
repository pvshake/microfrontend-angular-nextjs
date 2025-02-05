import formatter from '@/utils/formatter'
import dayjs from 'dayjs'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Models } from '@/../../shared/types/Cliente'

interface Props {
  cliente: Models.Cliente
}

const ClienteMobileItem: React.FC<Props> = ({ cliente }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-gray-600 text-sm leading-6 font-normal">
            <strong>CPF:</strong> {formatter([cliente.cpf, 'cpf'])}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm leading-6 font-normal">
            <strong>Dt. Nascimento:</strong>
            {cliente.dataNascimento}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm leading-6 font-normal">
            <strong>Score:</strong>
            {cliente.score >= 800 ? (
              <span className="text-green-500">{cliente.score}</span>
            ) : cliente.score >= 500 && cliente.score < 800 ? (
              <span className="text-yellow-500">{cliente.score}</span>
            ) : (
              <span className="text-red-500">{cliente.score}</span>
            )}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm leading-6 font-normal">
            <strong>Status:</strong>
            {cliente.statusCredito === 'apto' ? (
              <span className="text-green-500 border rounded-sm border-green-500 bg-green-100 p-1">
                Apto
              </span>
            ) : cliente.statusCredito === 'semiApto' ? (
              <span className="text-yellow-500 border rounded-sm border-yellow-500 bg-yellow-100 p-1">
                Apto Parc.
              </span>
            ) : (
              <span className="text-red-500 border rounded-sm border-red-500 bg-red-100 p-1">
                Inapto
              </span>
            )}
          </p>
        </div>
      </div>
      <ChevronRight className="h-6 w-6 text-gray-600 " />
    </div>
  )
}

export default ClienteMobileItem
