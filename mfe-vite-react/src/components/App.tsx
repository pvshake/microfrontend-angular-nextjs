import { BrowserRouter, Routes, Route } from 'react-router'
import ClientesPage from '../pages/ClientesPage'
import CriarClientePage from 'pages/CriarClientePage'
import ConsultarClientePage from 'pages/ConsultarClientePage'
import ClienteRetrievePage from 'pages/ClienteRetrievePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>oiiiii</>} />
        <Route path="clientes" element={<ClientesPage />} />
        <Route path="criar-cliente" element={<CriarClientePage />} />
        <Route path="consultar-cliente" element={<ConsultarClientePage />} />
        <Route path="clientes/:clienteId" element={<ClienteRetrievePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
