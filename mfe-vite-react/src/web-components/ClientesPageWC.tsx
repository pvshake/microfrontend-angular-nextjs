import React from 'react'
import ReactDOM from 'react-dom/client'
import ClientesPage from '../pages/ClientesPage'

class ClientesPageWC extends HTMLElement {
  private root?: ReactDOM.Root

  connectedCallback() {
    this.renderReact()
  }

  disconnectedCallback() {
    this.root?.unmount()
  }

  private renderReact() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(<ClientesPage />)
  }
}

customElements.define('clientes-page-wc', ClientesPageWC)
