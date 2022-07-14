import { createExpense, expenseItems } from "./ExpenseItem"
import Card from "./Card"
import "./App.css"
import ExpenseForm from "./ExpenseForm";

//this is the main App
function App() {
  return (
    <>
      <h1>Expenses</h1>
      <ExpenseForm />
      <Card className="outerMostContainer">
        {expenseItems.map(createExpense)} {/*This is called Array.length times. each time it will return a new <ExpenseItem /> component.*/}
      </Card>
    </>
  );
}

export default App;
