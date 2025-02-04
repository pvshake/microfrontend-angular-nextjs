import React from 'react'
import ReactDOM from 'react-dom/client'
import ClienteRetrievePage from 'pages/ClienteRetrievePage'

class ClienteRetrievePageWC extends HTMLElement {
  private root?: ReactDOM.Root

  connectedCallback() {
    this.renderReact()
  }

  disconnectedCallback() {
    this.root?.unmount()
  }

  private renderReact() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(<ClienteRetrievePage />)
  }
}

customElements.define('cliente-retrieve-page-wc', ClienteRetrievePageWC)
