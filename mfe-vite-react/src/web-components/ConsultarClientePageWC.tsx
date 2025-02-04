import React from 'react'
import ReactDOM from 'react-dom/client'
import ConsultarClientePage from 'pages/ConsultarClientePage'

class ConsultarClientePageWC extends HTMLElement {
  private root?: ReactDOM.Root

  connectedCallback() {
    this.renderReact()
  }

  disconnectedCallback() {
    this.root?.unmount()
  }

  private renderReact() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(<ConsultarClientePage />)
  }
}

customElements.define('consultar-cliente-page-wc', ConsultarClientePageWC)
