import { createExpense, expenseItems } from "./ExpenseItem"
import Card from "./Card"
import "./App.css"

//this is the main App
function App() {
  return (
    <>
      <h1>Expenses</h1>
      <Card className="outerMostContainer">
        {/*This is called Array.length times. each time it will return a new <ExpenseItem /> component.*/}
        {expenseItems.map(createExpense)}
      </Card>
    </>
  );
}

export default App;
