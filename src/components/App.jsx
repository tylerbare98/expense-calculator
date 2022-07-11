import { createExpense, expenseItems } from "./ExpenseItem"

function App() {
  return (
    <>
      <h1 styles="color:blue">Expenses</h1>
      {expenseItems.map(createExpense)}
    </>
  );
}

export default App;
