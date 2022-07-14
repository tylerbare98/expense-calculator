import "./ExpenseForm.css"
import {useState} from 'react'
import Card from "./Card";
import { expenseItems } from "./ExpenseItem"


function ExpenseForm(props) {

  //hooks
  const [items, setItems] = useState(expenseItems);

  return (
    <Card className="form-container">
      <form onSubmit={submitHandler} id="myForm">
        {/*Row1: Title and Amount*/}
        <div className="form-row">
          <div className="form-section">
            <label>Title</label><br/>
            <input className="form-inputBox" type="text" name="title"/>
          </div>
          <div className="form-section">
            <label>Amount</label><br/>
            <input className="form-inputBox" type="number"/>
          </div>
        </div>
        
        {/*Row2: Date and submit button*/}
        <div className="form-row">
          <div className="form-section" >
            <label>Date</label><br/>
            <input className="form-inputBox" type="date"/>
          </div>
          <div className="form-section">
              <input type="submit" value="Add Expense" className="form-button"></input>
          </div>
        </div>       
      </form> 
    </Card>
  )

  //handler for AddExpenseButton
  function submitHandler(e) {
    e.preventDefault(); //prevent default form behavior


    //sett variable to updat array
    let utcDate = e.target[2].valueAsDate; //date from DatePicker, whihc is off by a day
    let date = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000) //fixes timezone so not off by a day
    //split date into three variables
    let month = date.toLocaleString('default', { month: 'long' });
    let year = String(date.getFullYear());
    let day = String(date.getDate());
    let item = e.target[0].value;
    let cost = e.target[1].value;
    let key = String(expenseItems.length + 1);

    expenseItems.push({
      key: key,
      day: day,
      month: month,
      year: year,
      item: item,
      cost: cost
    });
  
    document.getElementById("myForm").reset();

      console.log(expenseItems);

     setItems(expenseItems);
  }
}



export default ExpenseForm;