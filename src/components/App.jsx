import { useState } from 'react';
import "./App.css"
import ExpenseForm from "./ExpenseForm";
import Expenses from './Expenses';

//this is the main App
function App() {

  //"use state" hook of an array to re render DOM when array of expenses changes
  const [expenses, setData] = useState([]) 
  
  //this captures new expense data from the child component <ExpenseForm />
  const formSubmitHandler = d => {

    //parsing variable to add new expense item data to the array
    let key = (expenses.length + 1);
    let date = new Date(d.date);
    let newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000); //account for timezone making days to be one off
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' })
    let day = newDate.getDate();
  
      //updates teh data variable and the state hook knows to re render the DOM
      setData([
        {
          key: key,
          day: day,
          month: month,
          year: year,
          item: d.title,
          cost: "$" + d.amount
        },
        ...expenses
      ])
  }

  return (
    <>
      <ExpenseForm onFormSubmit={formSubmitHandler} name="test"/> {/*Passes handler-function pointer down to the <ExpenseForm> through props, so data can be passed up*/}
      <Expenses array={expenses} />
    </>
  );
}

export default App;
