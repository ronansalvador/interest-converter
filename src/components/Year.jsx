import { useState } from 'react';

function Year() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  function converterTaxaAnualParaMensal() {
    const taxaAnual = year / 100;
    let taxaMensal = ((Math.pow(1 + taxaAnual, 1 / 12) - 1) * 100).toFixed(2);
    console.log(taxaMensal);
    setMonth(taxaMensal);
  }

  return (
    <>
      <h2>Converter Juros ao Ano para juros ao Mês</h2>
      <label htmlFor='juros-ano'>Juros ao Ano:</label>
      <input
        type='number'
        name='juros-ano'
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <span>% a.a</span>
      <button type='button' onClick={converterTaxaAnualParaMensal}>
        Calcular
      </button>
      <label htmlFor='juros-mes'>Juros ao Mês</label>
      <input type='number' name='juros-mes' value={month} disabled />
      <span>% a.m</span>
    </>
  );
}

export default Year;
