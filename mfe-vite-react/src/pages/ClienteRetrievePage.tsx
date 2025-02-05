import { Button, Form, message } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { Models } from '../../../shared/types/Cliente'
import { useParams } from 'react-router'
import { getCliente, patchCliente } from '../../../shared/storage/clientes'
import FormCliente from '@/components/FormCliente/FormCliente'
import ChartScore from '@/components/ChartScore/ChartScore'

const ClienteRetrievePage = () => {
  const [form] = Form.useForm()
  const url = window.location.href
  const clienteId = url.split('/').pop()
  const [cliente, setCliente] = useState<Models.Cliente>({} as Models.Cliente)
  const [editing, setEditing] = useState(false)

  const _getCliente = useCallback(
    (id: string) => {
      try {
        const cliente = getCliente(id)
        if (cliente) {
          setCliente(cliente)
          form.setFieldsValue(cliente)
        } else {
          console.warn(`Cliente com ID ${id} não encontrado.`)
        }
      } catch (error) {
        console.error('Erro ao buscar cliente:', error)
      }
    },
    [form]
  )

  const _patchCliente = useCallback(
    (values: Partial<Models.Cliente>) => {
      try {
        if (!clienteId) {
          console.error('ID do cliente não encontrado')
          return
        }
        const clienteAtualizado = patchCliente(clienteId as string, values)
        if (clienteAtualizado) {
          setCliente(clienteAtualizado)
          form.setFieldsValue(clienteAtualizado)
          message.success('Cliente atualizado com sucesso!')
          setEditing(false)
        } else {
          message.error('Erro ao atualizar cliente')
        }
      } catch (error) {
        console.error('Erro ao atualizar cliente:', error)
      }
    },
    [form, setCliente, setEditing, clienteId]
  )

  useEffect(() => {
    if (clienteId) {
      _getCliente(clienteId)
    } else {
      console.log('ID não encontrado na URL')
    }
  }, [_getCliente, clienteId])

  return (
    <div>
      <ChartScore score={cliente.score} cliente={cliente} />
      <FormCliente
        form={form}
        onFinish={_patchCliente}
        initialValues={cliente}
        type="edit"
        editing={editing}
        setEditing={setEditing}
      />
    </div>
  )
}

export default ClienteRetrievePage
