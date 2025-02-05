import App from '@/components/App'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import './index.css'
import '@/web-components/ClientesPageWC'
import '@/web-components/ConsultarClientePageWC'
import '@/web-components/ConsultarClientePageWC'
import '@/web-components/ClienteRetrievePageWC'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
