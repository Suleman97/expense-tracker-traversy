import { useContext } from 'react';
import { GlobalContext } from '../ContextAPI/GlobalContext';

export const IncomeBalance = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((trans) => trans.amount);



  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};
