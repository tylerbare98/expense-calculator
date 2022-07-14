import "./ExpenseForm.css"
import {useState} from 'react'
import Card from "./Card";


function ExpenseForm(props) {

  //hooks to control state
  const [inputs, setInputs] = useState({
      title: "",  
      amount: "", 
      date: ""    
  }); //empty JSON object of the inputs, initialized to make compiler happy

  //called when the value of input changes. ie) when user types something
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value})) //spread operator just writes values in values object, overwriting with the new data
  }

  //called when user clicks the submit button
  const submitHandler = (event) => {
    event.preventDefault(); //prevent lame default html form stuff
    console.log(inputs);
    setInputs({
      title: "",
      amount: "",
      date: ""
    });
  }

  //<ExpenseForm /> component For user to add expenses
  return (
    <Card className="form-container">
      <form onSubmit={submitHandler} id="myForm">
        {/*Row1: Title and Amount*/}
        <div className="form-row">
          <div className="form-section">
            <label>Title</label><br/>
            <input className="form-inputBox" type="text" name="title" 
              value={inputs.title} //clears form fields with "two way binding". Reference setInputs in submitHandler func
              onChange={changeHandler}/> {/*called when the value of input changes*/}
          </div>
          <div className="form-section">
            <label>Amount</label><br/>
            <input className="form-inputBox" type="number" name="amount" 
              value={inputs.amount} 
              onChange={changeHandler}/>
          </div>
        </div>
        
        {/*Row2: Date and submit button*/}
        <div className="form-row">
          <div className="form-section" >
            <label>Date</label><br/>
            <input className="form-inputBox" type="date" name="date" 
              value={inputs.date} 
              onChange={changeHandler}/>
          </div>
          <div className="form-section">
              <input type="submit" value="Add Expense" className="form-button"></input>
          </div>
        </div>       
      </form> 
    </Card>
  )
}

export default ExpenseForm;