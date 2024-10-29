import { useState } from 'react'

const Formulario = () => {
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
            default:
                alert('Por favor inserir um valor válido!')
        }
    }

    return (
        <>
            <form>
                <div className="row mb-4 mt-4">
                <div className="col-6">
                    <label htmlFor="peso">Peso em KG:</label>
                    <input className='form-control' type="number" id='peso' placeholder='60' onChange={ (e) => setPeso(e.target.value) } required />
                </div>
                <div className="col-6">
                    <label htmlFor="altura" >Altura em CM:</label>
                    <input className='form-control' type="number" id='altura' placeholder='175' onChange={ (e) => setAltura(e.target.value) } required />
                </div>
                </div>
                <div className="row mb-4 mt-4 p-3">
                <button className='btn btn-primary' type='button' onClick={ calcularImc }>Calcular</button>
                </div>
            </form>
            {imc > 0 && (
                <>
                    <h2>Seu IMC é de: { imc }</h2>
                    <p>Sua classificação é { classificacao }</p>
                </>
            )}
        </>
    )
}

export default Formulario;