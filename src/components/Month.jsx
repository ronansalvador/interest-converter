import { useState } from 'react';

function Month() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function converterTaxaMensalParaAnual() {
    const taxaMensal = month / 100;
    let taxaAnual = ((Math.pow(1 + taxaMensal, 12) - 1) * 100).toFixed(2);
    setYear(taxaAnual);
  }

  return (
    <>
      <h2>Converter Juros ao Mês para juros ao Ano</h2>
      <label htmlFor='juros-mes'>Juros ao Mês:</label>
      <input
        type='number'
        name='juros-mes'
        id='juros-mes'
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <span>% a.m</span>
      <button type='button' onClick={converterTaxaMensalParaAnual}>
        Calcular
      </button>
      <label htmlFor='juros-ano'>Juros ao Ano:</label>
      <input
        type='number'
        name='juros-ano'
        id='juros-ano'
        value={year}
        disabled
      />
      <span>% a.a</span>
    </>
  );
}

export default Month;
