import { useState } from 'react';
import './Profitability.css';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profitability() {
  const [inicial, setInicial] = useState('');
  const [mensal, setMensal] = useState('');
  const [tempo, setTempo] = useState('');
  const [rentabilidade, setRentabilidade] = useState('');
  const [periodo, setPeriodo] = useState('mes');
  const [investimento, setInvestimento] = useState(0);
  const [valorAcumulado, setValorAcumulado] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const showToastSuccess = (mensagem) => {
    toast.success(mensagem, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastError = (mensagem) => {
    toast.error(mensagem, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const converterParaReal = (valor) => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const rentabilidadeMensal = () => {
    const acumulado =
      inicial * Math.pow(1 + rentabilidade / 100, tempo) +
      mensal *
        ((Math.pow(1 + rentabilidade / 100, tempo) - 1) /
          (rentabilidade / 100));

    const investido = inicial + mensal * tempo;
    setInvestimento(investido);

    setValorAcumulado(acumulado);
    showToastSuccess('Calculando com juros mensais');
    setShowResult(true);
  };

  const rentabilidadeAnual = () => {
    const taxaAnual = rentabilidade / 100;
    let taxaMensal = ((Math.pow(1 + taxaAnual, 1 / 12) - 1) * 100).toFixed(2);

    const acumulado =
      inicial * Math.pow(1 + taxaMensal / 100, tempo) +
      mensal *
        ((Math.pow(1 + taxaMensal / 100, tempo) - 1) / (taxaMensal / 100));

    const investido = inicial + mensal * tempo;
    setInvestimento(investido);
    setValorAcumulado(acumulado);
    showToastSuccess('Calculando com juros anuais');
    setShowResult(true);
  };

  const calcularRentabilidade = () => {
    if (inicial === '' && mensal === '') {
      return showToastError(
        'Valor inicial e valor mensal não podem ser vazios',
      );
    }
    if (!tempo) {
      return showToastError('Tempo não pode ser vazio');
    }

    if (!rentabilidade) {
      return showToastError('Rentabilidade não pode ser vazio');
    }

    if (periodo === 'mes') rentabilidadeMensal();
    if (periodo === 'ano') rentabilidadeAnual();
  };

  return (
    <>
      <Header />
      <section className='container-profitability'>
        <h2>Simulador de Juros Compostos</h2>
        <>
          {showResult === false ? (
            <>
              <div className='div-label-input'>
                <label htmlFor='inicial'>
                  Quanto você tem hoje para investir?
                </label>
                <div className='input-money'>
                  <span>R$</span>
                  <input
                    type='number'
                    id='inicial'
                    name='inicial'
                    min='0'
                    placeholder='0,00'
                    value={inicial}
                    onChange={(e) => setInicial(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className='div-label-input'>
                <label htmlFor='mensal'>Aplicação mensal</label>
                <div className='input-money'>
                  <span>R$</span>
                  <input
                    type='number'
                    id='mensal'
                    name='mensal'
                    placeholder='0,00'
                    value={mensal}
                    onChange={(e) => setMensal(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className='div-label-input'>
                <label htmlFor='tempo'>Por quanto tempo?</label>
                <div className='input-number'>
                  <input
                    type='number'
                    id='tempo'
                    name='tempo'
                    className='input-tempo'
                    placeholder='Digite o número'
                    value={tempo}
                    onChange={(e) => setTempo(Number(e.target.value))}
                  />
                  <span>Meses</span>
                </div>
              </div>
              <div className='div-label-input'>
                <label htmlFor='rentabilidade'>Rentabilidade</label>
                <div className='div-rentabilidade'>
                  <div className='input-number'>
                    <input
                      type='number'
                      id='rentabilidade'
                      name='rentabilidade'
                      placeholder='0,00'
                      required
                      value={rentabilidade}
                      onChange={(e) => setRentabilidade(Number(e.target.value))}
                    />
                    <span>%</span>
                  </div>
                  <select
                    name='rentabilidade-periodo'
                    id='rentabilidade-periodo'
                    value={periodo}
                    required
                    onChange={(e) => setPeriodo(e.target.value)}
                  >
                    <option value='mes'>ao mes</option>
                    <option value='ano'>ao ano</option>
                  </select>
                </div>
              </div>
              <button
                type='submit'
                onClick={() => {
                  calcularRentabilidade();
                }}
              >
                Calcular
              </button>
              {/* {error && <p className='error'>{error}</p>} */}
            </>
          ) : (
            <>
              <h3>{`O valor total investido é de R$: ${converterParaReal(
                investimento,
              )}`}</h3>
              <h3>{`Juros ganhos no período R$: ${converterParaReal(
                valorAcumulado - investimento,
              )}`}</h3>
              <h3>{`O valor total acumlado é de R$: ${converterParaReal(
                valorAcumulado,
              )}`}</h3>

              <button
                type='button'
                onClick={() => {
                  setShowResult(false);
                }}
              >
                Novo Cálculo
              </button>
            </>
          )}
        </>
        <ToastContainer />
      </section>
    </>
  );
}

export default Profitability;
