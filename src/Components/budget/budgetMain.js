import Income from "./incomeComp";
import "./budgetMain.css";
import Expenses from "./expensesComp";
import DisplayIncome from "./getIncome";
import DisplayExpenses from "./getExpenses";
function Budget() {
  return (
    <div>
      <div className="income-container">
        <div className="total-container">
          <div>
            <h1 className="budget-income">INCOME</h1>
          </div>
          <div className="budget-income">
            <h1>MONTH</h1>
          </div>
          <div className="budget-income">
            <h1>TOTAL:</h1>
          </div>
        </div>
        <Income />
        <div className='added-income-container'>
            <DisplayIncome />
        </div>
      </div>
      <div className="expense-container">
        <div className='total-container'>
        <div>
          <h1 className="budget-income">EXPENSES</h1>
        </div>
        <div className='budget-income'>
          <h1>MONTH</h1>
        </div>
        <div className='budget-income'>
          <h1>TOTAL:</h1>
        </div>
      </div>
      <Expenses />
      <div className='added-expense-container'>
          <DisplayExpenses />
      </div>
    </div>
</div>
  );
}

export default Budget;
