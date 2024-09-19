import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <Routes>
      <Route path='/transakcje' element={<Transactions />} />
    </Routes>
  );
}

export default App;
