import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormInstance, Select } from 'antd'
import { Filter, FilterX } from 'lucide-react'
import React from 'react'
import { Models } from '../../../shared/types/Cliente'
import { withMask } from 'use-mask-input'
import { unformat } from '@/utils/formatter'

interface FilterClienteProps {
  form: FormInstance
  onFilter: (values: Models.Cliente) => void
  onClear: () => void
}

const FilterCliente = ({ form, onFilter, onClear }: FilterClienteProps) => {
  const onFinishFilter = (values: Models.Cliente) => {
    onFilter({ ...values, cpf: values.cpf && unformat(values.cpf) })
  }
  return (
    <div>
      <Form
        className="shadow-lg mt-6 p-6 flex h-auto w-full flex-col rounded-2xl"
        onFinish={onFinishFilter}
        layout="vertical"
        form={form}
      >
        <div className="grid grid-cols-2 gap-4">
          <Form.Item label="Nome" name="nomeCompleto">
            <Input
              className="h-12 rounded-3xl px-4 border-gray-200 !bg-white-50"
              placeholder="Digite o nome"
            />
          </Form.Item>
          <Form.Item label="CPF" name="cpf">
            <Input
              className="h-12 rounded-3xl px-4 border-gray-200 !bg-white-50"
              placeholder="Digite o CPF"
              ref={withMask('999.999.999-99') as any}
            />
          </Form.Item>
          <Form.Item label="E-mail" name="email">
            <Input
              className="h-12 rounded-3xl px-4 border-gray-200 !bg-white-50"
              placeholder="Digite o e-mail"
            />
          </Form.Item>
          <Form.Item label="Score" name="score">
            <Input
              type="number"
              className="h-12 rounded-3xl px-4 border-gray-200 !bg-white-50"
              placeholder="Digite o score"
            />
          </Form.Item>
          <Form.Item label="Status" name="statusCredito" className="col-span-2">
            <Select
              className="h-12 rounded-3xl px-4 border-gray-200 !bg-white-50"
              placeholder="Selecione o status de crédito"
              options={[
                { label: 'Apto', value: 'apto' },
                { label: 'Apto Parcialmente', value: 'semiApto' },
                { label: 'Inapto', value: 'Inapto' }
              ]}
            />
          </Form.Item>
        </div>
        <div className="w-full flex justify-end gap-2 mt-4">
          <Button
            type="button"
            variant="danger"
            onClick={() => {
              form.resetFields()
              onClear()
            }}
            className="flex-center gap-2 rounded-3xl text-[15px] font-medium text-white shadow-default"
          >
            <FilterX className="h-4 w-4" />
            Limpar
          </Button>
          <Button
            type="button"
            onClick={form.submit}
            className="flex-center gap-2 rounded-3xl bg-primary-main text-[15px] font-medium text-white shadow-default hover:bg-primary-main/80"
          >
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default FilterCliente
