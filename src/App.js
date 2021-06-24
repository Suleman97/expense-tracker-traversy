
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeBalance } from './components/IncomeBalance';
import { TransectionList } from './components/TransectionList';
import { AddTransection } from './components/AddTransection';

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
      <AddTransection />
    </div>
  );
}

export default App;
