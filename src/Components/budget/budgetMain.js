import Income from "./incomeComp";
import "./budgetMain.css";
import Expenses from "./expensesComp";
import DisplayIncome from "./getIncome";
import DisplayExpenses from "./getExpenses";
import IncomeChart from "../Charts.js/incomeChart";
import ExpenseChart from "../Charts.js/expenseChart";

function Budget() {
  return (
    <div className='budget'>
      <div className="income-container">
        <div className="total-container">
          <div>
            <h1 className="budget-income">INCOME</h1>
          </div>
          <div className="budget-income">
            <h3 className='h3'>To start tracking your income, fill out the box below and then click add.</h3>
          </div>
        </div>
        <Income />
        <div className='added-income-container'>
            <DisplayIncome />
        </div>
            
      </div>
      <div className='graph'>
      <IncomeChart />
      </div>
      <div className="expense-container">
        <div className='total-container'>
        <div>
          <h1 className="budget-income">EXPENSES</h1>
        </div>
        <div className='budget-income'>
          <h3 className='h3'>To start tracking your expenses, fill out the box below and then click add.</h3>
        </div>
      </div>
      <Expenses />
      <div className='added-expense-container'>
          <DisplayExpenses />
      </div>
    </div>
    <div className='graph'>
    <ExpenseChart />
    </div>
</div>
  );
}

export default Budget;
