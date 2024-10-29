import { useState } from 'react'

import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularImc = () => {
    const imc = ((parseInt(peso) / (parseInt(altura) ** 2)) * 10000).toFixed(1);
    setImc(imc);
    
    switch(true) {
      case (imc < 18):
        setClassificacao('abaixo do peso');
        break;
      case (imc < 24.9):
        setClassificacao('peso normal');
        break;
      case (imc < 29.9):
        setClassificacao('sobrepeso');
        break;
      case (imc < 34.9):
        setClassificacao('obesidade grau I');
        break;
      case (imc < 39.9):
        setClassificacao('obesidade grau II');
        break;
      case (imc > 40):
        setClassificacao('obesidade grau III');
        break;
    }
  }

  return (
    <>
    <div className="container">
      <Header />
      <Formulario />
    </div>
    </>
  )
}

export default App
