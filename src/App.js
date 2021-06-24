
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeBalance } from './components/IncomeBalance';
import { TransectionList } from './components/TransectionList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncomeBalance />
      <TransectionList />
    </div>
  );
}

export default App;
