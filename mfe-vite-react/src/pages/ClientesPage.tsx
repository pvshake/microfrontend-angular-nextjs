import React, { useEffect, useState } from 'react'

const ClientesPage = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('React ClientesPage montado!')
  }, [])

  return (
    <div>
      <p>Contador: {count}</p>
      <button
        className="border-4 border-blue-500"
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </button>
    </div>
  )
}

export default ClientesPage
