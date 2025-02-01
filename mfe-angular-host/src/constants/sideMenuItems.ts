import {
  faMagnifyingGlass,
  faPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    label: 'Lista de Clientes',
    icon: faUsers,
    route: '/clients',
  },
  {
    label: 'Cadastro de Clientes',
    icon: faPlus,
    route: '/create-client',
  },
  {
    label: 'Consulta de Clientes',
    icon: faMagnifyingGlass,
    route: '/search-clients',
  },
] as Models.MenuItem[];
