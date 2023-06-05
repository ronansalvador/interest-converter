import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/rentabilidade'>Rentabilidade</Link>
        </li>
        <li>
          <Link to='/'>Converter juros</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
