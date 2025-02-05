import React from 'react'
import { ChevronRight, Search } from 'lucide-react'
import { Models } from '@/../../shared/types/Cliente'
import { Input } from '../ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table'
import { Avatar, AvatarFallback } from '../ui/avatar'
import getNameInitials from '@/utils/getNameInitials'
import formatter from '@/utils/formatter'
import ClienteMobileItem from '../ClienteMobileItem/ClienteMobileItem'

interface ClientesListProps {
  clientes: Models.Cliente[]
  onSearch?: (value: string) => void
  hideSearchBar?: boolean
}

const ClientesList = ({
  clientes,
  onSearch = () => {},
  hideSearchBar = false
}: ClientesListProps) => {
  return (
    <div className="shadow-lg mt-6 flex h-auto w-full flex-col rounded-2xl">
      {!hideSearchBar && (
        <div className="flex w-full items-center justify-between gap-2 p-5">
          <div className="relative w-full">
            <Input
              className="!bg-white-50 h-12 rounded-3xl border-gray-200 px-4"
              placeholder="Buscar cliente por nome..."
              onChange={(e: any) => onSearch(e.target.value)}
            />
            <div className="absolute right-2 top-[0.325rem] h-full px-3 py-2">
              <Search className="size-5 text-gray-500" />
            </div>
          </div>
        </div>
      )}
      {clientes.length > 0 ? (
        <Table className="w-full border-collapse bg-white">
          <TableHeader>
            <TableRow className="bg-gray-200 text-sm font-semibold leading-6 text-gray-600">
              <TableHead className="w-[40%] p-4 text-left max-md:hidden">
                Nome Cliente
              </TableHead>
              <TableHead className="w-[15%] p-4 text-left max-md:hidden">
                CPF
              </TableHead>
              <TableHead className="w-[25%] p-4 text-left max-md:hidden">
                E-mail
              </TableHead>
              <TableHead className="w-[10%] p-4 text-center max-md:hidden">
                Score
              </TableHead>
              <TableHead className="w-[10%] p-4 text-right max-md:hidden">
                Acessar
              </TableHead>
              <TableHead className="hidden w-full p-4 max-md:table-cell">
                Clientes
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientes.map((cliente, key) => (
              <TableRow
                key={key}
                onClick={() =>
                  window.location.replace(`/clientes/${cliente.id}`)
                }
                className="cursor-pointer border-b border-dashed border-gray-500 border-opacity-20 hover:bg-gray-100"
              >
                <TableCell className="!max-md:hidden flex items-center gap-4 p-4">
                  <Avatar className="cursor-pointer">
                    <AvatarFallback>
                      {getNameInitials(cliente.nomeCompleto || 'Sem Nome')}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium leading-6 text-gray-800 ">
                    {cliente.nomeCompleto}
                  </p>
                </TableCell>
                <TableCell className="p-4 max-md:hidden">
                  {formatter([cliente.cpf, 'cpf'])}
                </TableCell>
                <TableCell className="p-4 max-md:hidden">
                  {cliente.email}
                </TableCell>
                <TableCell className="p-4 max-md:hidden text-center">
                  {cliente.score >= 800 ? (
                    <span className="text-green-500">{cliente.score}</span>
                  ) : cliente.score >= 500 && cliente.score < 800 ? (
                    <span className="text-yellow-500">{cliente.score}</span>
                  ) : (
                    <span className="text-red-500">{cliente.score}</span>
                  )}
                </TableCell>
                <TableCell className="p-4 text-center max-md:hidden">
                  <div className="flex items-center justify-end size-full">
                    <ChevronRight className="size-6 text-gray-600 " />
                  </div>
                </TableCell>
                <TableCell className="p-4 max-md:table-cell hidden">
                  <ClienteMobileItem cliente={cliente} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="px-3 py-4 text-center">Nenhum usuário encontrado</div>
      )}
      <footer className="px-3 py-4 text-center">
        <p className="text-gray-500 text-sm">
          {clientes.length} {clientes.length === 1 ? 'cliente' : 'clientes'}
        </p>
      </footer>
    </div>
  )
}

export default ClientesList
