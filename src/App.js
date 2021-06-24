
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeBalance } from './components/IncomeBalance';
import { TransectionList } from './components/TransectionList';
import { AddTransection } from './components/AddTransection';
import { GlobalProvider } from './ContextAPI/GlobalContext'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncomeBalance />
      <TransectionList />
      <AddTransection />
    </GlobalProvider>
  );
}

export default App;
