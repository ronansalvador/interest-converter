import { useState } from 'react';

function BothButton() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function converterTaxaMensalParaAnual(taxaMes) {
    setMonth(taxaMes);
    const taxaMensal = taxaMes / 100;
    let taxaAnual = ((Math.pow(1 + taxaMensal, 12) - 1) * 100).toFixed(2);
    setYear(taxaAnual);
  }

  function converterTaxaAnualParaMensal(taxaAno) {
    setYear(taxaAno);
    const taxaAnual = taxaAno / 100;
    let taxaMensal = ((Math.pow(1 + taxaAnual, 1 / 12) - 1) * 100).toFixed(2);
    console.log(taxaMensal);
    setMonth(taxaMensal);
  }

  return (
    <>
      <h1>Converter juros</h1>
      <p>teste</p>
      <label htmlFor='juros-mes'>Juros ao Mês:</label>
      <input
        type='number'
        name='juros-mes'
        id='juros-mes'
        value={month}
        onChange={(e) => converterTaxaMensalParaAnual(e.target.value)}
      />
      <span>% a.m</span>
      <label htmlFor='juros-ano'>Juros ao Ano:</label>
      <input
        type='number'
        name='juros-ano'
        id='juros-ano'
        value={year}
        onChange={(e) => converterTaxaAnualParaMensal(e.target.value)}
      />
      <span>% a.a</span>
    </>
  );
}

export default BothButton;
