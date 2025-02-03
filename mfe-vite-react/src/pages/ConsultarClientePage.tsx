import React from 'react'

const ConsultarClientePage = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-red-500">
        ConsultarClientePage
      </h1>
      <button
        className="border-4 border-red-500"
        onClick={() => window.location.replace('/')}
      >
        clica ai
      </button>
    </div>
  )
}

export default ConsultarClientePage
