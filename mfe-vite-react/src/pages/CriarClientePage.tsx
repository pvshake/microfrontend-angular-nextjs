import React from 'react'

const CriarClientePage = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-red-500">CriarClientePage</h1>
      <button
        className="border-4 border-red-500"
        onClick={() => window.location.replace('/clientes')}
      >
        clica ai
      </button>
    </div>
  )
}

export default CriarClientePage
