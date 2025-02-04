import { BrowserRouter, Routes, Route } from 'react-router'
import ClientesPage from '../pages/ClientesPage'
import CriarClientePage from 'pages/CriarClientePage'
import ConsultarClientePage from 'pages/ConsultarClientePage'
import ClienteRetrievePage from 'pages/ClienteRetrievePage'
import 'web-components/ClientesPageWC'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Route path="/" element={<clientes-page-wc></clientes-page-wc>} />
        <Route path="clientes" element={<ClientesPage />} />
        <Route path="criar-cliente" element={<CriarClientePage />} />
        <Route path="consultar-cliente" element={<ConsultarClientePage />} />
        <Route path="clientes/:clienteId" element={<ClienteRetrievePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
