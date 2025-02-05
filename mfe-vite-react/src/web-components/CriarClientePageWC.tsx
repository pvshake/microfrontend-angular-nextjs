import CriarClientePage from '@/pages/CriarClientePage'
import React from 'react'
import ReactDOM from 'react-dom/client'

class CriarClientePageWC extends HTMLElement {
  private root?: ReactDOM.Root

  connectedCallback() {
    this.renderReact()
  }

  disconnectedCallback() {
    this.root?.unmount()
  }

  private renderReact() {
    this.root = ReactDOM.createRoot(this)
    this.root.render(<CriarClientePage />)
  }
}

customElements.define('criar-cliente-page-wc', CriarClientePageWC)
