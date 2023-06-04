import { useState } from 'react';

function Profitability() {
  const [inicial, setInicial] = useState('');
  const [mensal, setMensal] = useState('');
  const [tempo, setTempo] = useState('');
  const [rentabilidade, setRentabilidade] = useState('');
  const [periodo, setPeriodo] = useState('mes');
  const [investimento, setInvestimento] = useState(0);
  const [valorAcumulado, setValorAcumulado] = useState(0);

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
  };

  const calcularRentabilidade = () => {
    if (periodo === 'mes') rentabilidadeMensal();
    if (periodo === 'ano') rentabilidadeAnual();
  };

  return (
    <>
      <h1>Rentabilidade</h1>
      <label htmlFor='inicial'>Quanto você tem hoje para investir?</label>
      <input
        type='number'
        id='inicial'
        name='inicial'
        value={inicial}
        onChange={(e) => setInicial(Number(e.target.value))}
      />
      <label htmlFor='mensal'>Aplicação mensal</label>
      <input
        type='number'
        id='mensal'
        name='mensal'
        value={mensal}
        onChange={(e) => setMensal(Number(e.target.value))}
      />
      <label htmlFor='tempo'>Por quanto tempo?</label>
      <input
        type='number'
        id='tempo'
        name='tempo'
        value={tempo}
        onChange={(e) => setTempo(Number(e.target.value))}
      />
      <label htmlFor='rentabilidade'>Rentabilidade</label>
      <input
        type='number'
        id='rentabilidade'
        name='rentabilidade'
        value={rentabilidade}
        onChange={(e) => setRentabilidade(Number(e.target.value))}
      />
      <select
        name='rentabilidade-periodo'
        id='rentabilidade-periodo'
        value={periodo}
        onChange={(e) => setPeriodo(e.target.value)}
      >
        <option value='mes'>ao mes</option>
        <option value='ano'>ao ano</option>
      </select>
      <button
        type='button'
        onClick={() => {
          // rentabilidadeMesnal();
          calcularRentabilidade();
          console.log(inicial, mensal, tempo, rentabilidade, periodo);
        }}
      >
        Calcular
      </button>
      <p>{`O valor total investido é de R$: ${converterParaReal(
        investimento,
      )}`}</p>
      <p>{`Juros Ganhos No Período Com Juros Compostos R$: ${converterParaReal(
        valorAcumulado - investimento,
      )}`}</p>
      <p>{`O valor total acumlado é de R$: ${converterParaReal(
        valorAcumulado,
      )}`}</p>
    </>
  );
}

export default Profitability;
