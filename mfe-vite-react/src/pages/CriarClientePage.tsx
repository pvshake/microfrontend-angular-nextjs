import { Form, message } from 'antd'
import React, { useCallback } from 'react'
import { Models } from '../../../shared/types/Cliente'
import { postCliente } from '../../../shared/storage/clientes'
import FormCliente from '@/components/FormCliente/FormCliente'

const CriarClientePage = () => {
  const [form] = Form.useForm()

  const _postCliente = useCallback(
    (values: Models.Cliente) => {
      const { id, statusCredito, ...clienteData } = values
      try {
        postCliente(clienteData)
        message.success('Cliente criado com sucesso')
        form.resetFields()
        window.location.replace('/clientes')
      } catch (error) {
        message.error('Erro ao criar cliente')
      }
    },
    [form]
  )

  return (
    <div>
      <FormCliente form={form} onFinish={_postCliente} />
    </div>
  )
}

export default CriarClientePage
