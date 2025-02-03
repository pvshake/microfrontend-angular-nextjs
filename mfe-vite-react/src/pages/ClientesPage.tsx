import React from 'react'

const ClientesPage = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-red-500">ClientesPage</h1>
      <button
        className="border-4 border-red-500"
        onClick={() => window.location.replace(`/criar-cliente/123`)}
      >
        clica ai
      </button>
    </div>
  )
}

export default ClientesPage
