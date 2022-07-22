import "./ExpenseFormOpen.css"
import {useState} from 'react'
import Card from "../Card";
import ExpenseButton from "./ExpenseButton";
import ErrorModal from "../../UI/ErrorModal"

function ExpenseFormOpen(props) {

  //hooks to control state: inputs is one object holding the entered form data
  const [error, setError] = useState();
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
    
    //cancel this function if all fields are not filled out
    if(!inputs.title || !inputs.amount || !inputs.date){
      setError("All fields must be filled out.")  
      return;
    }

    //clear inputs on submit
    setInputs({
      title: "",
      amount: "",
      date: ""
    });
    props.onFormSubmit(inputs); //handler-function pointer from parent. Now we pass the inputs up to the parent

    //notify the parent FormContainer that we want isOpen to be false(closes form)
    props.onButtonClick(false)
  }

  //notify the parent FormContainer that we want isOpen to be false(closes form)
  const clickHandler = () => {
    props.onButtonClick(false)
  }

  const exitModalHandler = () => {
    setError();
  }

  //<ExpenseForm /> component For user to add expenses
  return (
    <>
    {error && <ErrorModal errorText={error} exitModal={exitModalHandler}/>} {/*renders if error is truthy(not null)*/}
    <h1 className="heading">Expenses</h1>
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
            <ExpenseButton className="form-button" buttonType="button" buttonText="Cancel" 
                           onButtonClick={clickHandler}
            />
            <input type="submit" value="Add Expense" className="form-button"/>
          </div>
        </div>       
      </form> 
    </Card>
    </>
  )
}

export default ExpenseFormOpen;