import React, { useCallback, useEffect, useState } from 'react'
import { Models } from '../../../shared/types/Cliente'
import { getClientes, filterClientes } from '../../../shared/storage/clientes'
import ClientesList from '@/components/ClientesList/ClientesList'

const ClientesPage = () => {
  const [clientes, setClientes] = useState<Models.Cliente[]>(
    [] as Models.Cliente[]
  )
  const [filteredClientes, setFilteredClientes] = useState<Models.Cliente[]>(
    [] as Models.Cliente[]
  )

  const _getClientes = useCallback(() => {
    const data = getClientes()
    setClientes(data)
    setFilteredClientes(data)
  }, [])

  const onSearch = (query: string) => {
    if (!query) {
      setFilteredClientes(clientes)
      return
    }

    const resultados = filterClientes(query)
    setFilteredClientes(resultados)
  }

  useEffect(() => {
    _getClientes()
  }, [_getClientes])

  return (
    <article>
      {clientes && clientes.length > 0 ? (
        <div>
          <ClientesList clientes={filteredClientes} onSearch={onSearch} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-lg">Nenhum cliente encontrado</p>
        </div>
      )}
    </article>
  )
}

export default ClientesPage
