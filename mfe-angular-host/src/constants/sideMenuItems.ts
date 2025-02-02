import {
  faMagnifyingGlass,
  faPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    label: 'Lista de Clientes',
    icon: faUsers,
    route: '/clientes',
  },
  {
    label: 'Cadastro de Clientes',
    icon: faPlus,
    route: '/criar-cliente',
  },
  {
    label: 'Consulta de Clientes',
    icon: faMagnifyingGlass,
    route: '/consultar-cliente',
  },
] as Models.MenuItem[];
