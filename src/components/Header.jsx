import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <Link to='/rentabilidade'>Calculadora de Juros Compostos</Link>

      <Link to='/'>Converter juros</Link>
    </header>
  );
}

export default Header;
