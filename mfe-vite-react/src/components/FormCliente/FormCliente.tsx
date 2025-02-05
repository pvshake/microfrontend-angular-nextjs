import { Input } from '@/components/ui/input'
import { withMask } from 'use-mask-input'
import { Divider, Form, FormInstance, Select } from 'antd'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { unformat } from '@/utils/formatter'
import { Models } from '../../../../shared/types/Cliente'
import defaultFormRules from '@/utils/defaultFormRules'
import { Button } from '../ui/button'
import { Pencil, Plus } from 'lucide-react'

interface Props {
  form: FormInstance
  onFinish: (value: Models.Cliente) => void
  type?: 'edit' | 'create'
  initialValues?: Models.Cliente
  editing?: boolean
  setEditing?: React.Dispatch<React.SetStateAction<boolean>>
}
const FormCliente: React.FC<Props> = ({
  form,
  onFinish,
  type = 'create',
  initialValues: rawValues,
  editing,
  setEditing = () => {}
}) => {
  const initialValues = useMemo(() => {
    if (rawValues) {
      return {
        ...rawValues
      }
    }
  }, [rawValues])

  const [tipoPagamento, setTipoPagamento] = useState<
    'cartao' | 'pix' | 'boleto'
  >()

  const submitToFather = useCallback(
    (values: Models.Cliente) => {
      const data = {
        ...values,
        cpf: unformat(values.cpf),
        telefone: unformat(values.telefone)
      }
      onFinish(data)
    },
    [onFinish]
  )

  useEffect(() => {
    if (initialValues?.dadosPagamento?.tipo) {
      setTipoPagamento(initialValues.dadosPagamento.tipo)
    }
  }, [initialValues])

  return (
    <>
      <Form
        className="shadow-lg mt-6 p-6 flex h-auto w-full flex-col rounded-2xl"
        form={form}
        layout="vertical"
        onFinish={submitToFather}
        initialValues={initialValues}
      >
        <div className="flex items-center justify-end gap-4 mt-4">
          {type === 'edit' && (
            <Button
              className="flex items-center gap-1"
              type="button"
              variant="outline"
              onClick={() => setEditing(!editing)}
              data-testid="edit-button"
            >
              {editing ? 'Cancelar' : 'Editar'}
            </Button>
          )}
          <Button
            className="flex items-center gap-1"
            type="button"
            variant="primary"
            onClick={form.submit}
            disabled={!editing && type === 'edit'}
            data-testid="submit-button"
          >
            {type === 'create' ? (
              <Plus className="h-5 w-5" />
            ) : (
              <Pencil className="h-5 w-5" />
            )}
            {type === 'create' ? 'Criar' : 'Alterar'} Cliente
          </Button>
        </div>
        <span className="text-sm font-medium text-gray-600">
          Dados Pessoais
        </span>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 w-full h-fit my-6">
          <Form.Item name="nomeCompleto" label="Nome" rules={defaultFormRules}>
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              data-testid="nome-completo-input"
            />
          </Form.Item>
          <Form.Item name="cpf" label="CPF" rules={defaultFormRules}>
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              ref={withMask('999.999.999-99') as any}
              data-testid="cpf-input"
            />
          </Form.Item>
          <Form.Item
            name="dataNascimento"
            label="Data de Nascimento"
            rules={defaultFormRules}
          >
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              ref={withMask('99/99/9999') as any}
              data-testid="data-nascimento-input"
            />
          </Form.Item>

          <Form.Item name="email" label="E-mail" rules={defaultFormRules}>
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              data-testid="email-input"
            />
          </Form.Item>
          <Form.Item name="telefone" label="Telefone" rules={defaultFormRules}>
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              ref={withMask('(99) 99999-9999') as any}
              data-testid="telefone-input"
            />
          </Form.Item>
        </div>
        <Divider className="!m-2" />
        <span className="text-sm font-medium text-gray-600">Endereço</span>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 w-full h-fit my-6">
          <Form.Item
            name={['endereco', 'cep']}
            label="CEP"
            rules={defaultFormRules}
          >
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              ref={withMask('99999-999') as any}
              data-testid="cep-input"
            />
          </Form.Item>
          <Form.Item
            name={['endereco', 'rua']}
            label="Rua"
            rules={defaultFormRules}
          >
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              data-testid="rua-input"
            />
          </Form.Item>
          <Form.Item
            name={['endereco', 'cidade']}
            label="Cidade"
            rules={defaultFormRules}
          >
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              data-testid="cidade-input"
            />
          </Form.Item>
          <Form.Item
            name={['endereco', 'estado']}
            label="Estado"
            rules={defaultFormRules}
          >
            <Input
              className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={!editing && type === 'edit'}
              data-testid="estado-input"
            />
          </Form.Item>
        </div>
        <Divider className="!m-2" />
        <span className="text-sm font-medium text-gray-600">
          Dados de Pagamento
        </span>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 w-full h-fit my-6">
          <Form.Item
            name={['dadosPagamento', 'tipo']}
            label="Tipo de Pagamento"
            rules={defaultFormRules}
          >
            <Select
              disabled={!editing && type === 'edit'}
              onChange={(value) => setTipoPagamento(value)}
              data-testid="tipo-pagamento-select"
            >
              <Select.Option value="cartao">Cartão</Select.Option>
              <Select.Option value="boleto">Boleto</Select.Option>
              <Select.Option value="pix">Pix</Select.Option>
            </Select>
          </Form.Item>

          {tipoPagamento === 'cartao' && (
            <>
              <Form.Item
                name={['dadosPagamento', 'nrCartao']}
                label="Número do Cartão"
                rules={defaultFormRules}
              >
                <Input
                  className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
                  disabled={!editing && type === 'edit'}
                  ref={withMask('9999 9999 9999 9999') as any}
                  data-testid="nr-cartao-input"
                />
              </Form.Item>
              <Form.Item
                name={['dadosPagamento', 'validadeCartao']}
                label="Validade"
                rules={defaultFormRules}
              >
                <Input
                  className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
                  disabled={!editing && type === 'edit'}
                  ref={withMask('99/99') as any}
                  data-testid="validade-cartao-input"
                />
              </Form.Item>
              <Form.Item
                name={['dadosPagamento', 'cvv']}
                label="CVV"
                rules={defaultFormRules}
              >
                <Input
                  className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
                  disabled={!editing && type === 'edit'}
                  ref={withMask('999') as any}
                  data-testid="cvv-input"
                />
              </Form.Item>
            </>
          )}

          {tipoPagamento === 'boleto' && (
            <Form.Item
              name={['dadosPagamento', 'cdBoleto']}
              label="Código do Boleto"
              rules={defaultFormRules}
            >
              <Input
                className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={!editing && type === 'edit'}
                data-testid="cd-boleto-input"
              />
            </Form.Item>
          )}

          {tipoPagamento === 'pix' && (
            <Form.Item
              name={['dadosPagamento', 'chavePix']}
              label="Chave PIX"
              rules={defaultFormRules}
            >
              <Input
                className="disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
                disabled={!editing && type === 'edit'}
                data-testid="chave-pix-input"
              />
            </Form.Item>
          )}
        </div>
      </Form>
    </>
  )
}
export default FormCliente
