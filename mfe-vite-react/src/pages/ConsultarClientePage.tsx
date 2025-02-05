import { Form } from 'antd'
import React, { useState } from 'react'
import { Models } from '../../../shared/types/Cliente'
import { filterClientes } from '../../../shared/storage/clientes'
import FilterCliente from '@/components/FilterCliente/FilterCliente'
import ClientesList from '@/components/ClientesList/ClientesList'

const ConsultarClientePage = () => {
  const [form] = Form.useForm()
  const [clientes, setClientes] = useState<Models.Cliente[]>([])

  const onFilter = (values: Partial<Models.Cliente>) => {
    const resultado = filterClientes('', values)
    setClientes(resultado)
  }

  const onClear = () => {
    form.resetFields()
    const allClientes = filterClientes('')
    setClientes(allClientes)
  }

  return (
    <div>
      <FilterCliente
        form={form}
        onFilter={onFilter}
        onClear={() => {
          onClear()
          setClientes([] as Models.Cliente[])
        }}
      />
      <ClientesList clientes={clientes} hideSearchBar />
    </div>
  )
}

export default ConsultarClientePage
