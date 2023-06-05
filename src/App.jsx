import { Routes, Route } from 'react-router-dom';
import MonthToYear from './pages/MonthToYear';
import Profitability from './pages/Profitability';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MonthToYear />} />
      <Route path='/rentabilidade' element={<Profitability />} />
    </Routes>
  );
}

export default App;
