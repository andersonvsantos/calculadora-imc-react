import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <header>
        <h1>Calculadora de IMC</h1>
      </header>
      <form>
        <label htmlFor="peso">Peso em KG:</label>
        <input type="number" id='peso' placeholder='50'/>
        <label htmlFor="altura" >Altura em CM:</label>
        <input type="number" id='altura' placeholder='175'/>
        <button type='button'>Calcular</button>
      </form>
      <h2>Seu IMC é de: <span>{}</span></h2>
    </div>
    </>
  )
}

export default App
