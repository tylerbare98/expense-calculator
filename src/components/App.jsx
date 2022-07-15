import { useState } from 'react';
import { createExpense, expenseItems } from "./ExpenseItem"
import "./App.css"
import Card from "./Card"
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from './ExpenseFilter';

//this is the main App
function App() {

  //"use state" hook of an array to re render DOM when array of expenses changes
  const [expense, setData] = useState([]) 
  
  //this captures data from the chiul component <ExpenseForm />
  const formSubmitHandler = d => {

    //parsing variable to add new expense item data to the array
    let key = (expense.length + 1);
    let date = new Date(d.date);
    let newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000); //account for timezone making days to be one off
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' })
    let day = newDate.getDate();
  
      //updates teh data variable and the state hook knows to re render the DOM
      setData([
        ...expense,
        {
          key: key,
          day: day,
          month: month,
          year: year,
          item: d.title,
          cost: "$" + d.amount
        }
      ])
  }

  return (
    <>
      <h1 className="heading">Expenses</h1>
      <ExpenseForm onFormSubmit={formSubmitHandler} name="test"/> {/*Passes handler-function pointer down to the <ExpenseForm> through props, so data can be passed up*/}
      <Card className="outerMostContainer">
        <ExpenseFilter />
        {expense.map(createExpense)} {/*This is called Array.length times. each time it will return a new <ExpenseItem /> component.*/}
      </Card>
    </>
  );
}

export default App;
