/*
    This Component will hold the component of both an open form and a cloed form. Based on the state being open or closed,
    it will render the appropiate component.
*/

import "./ExpenseFormContainer.css"  //This is implicitly linked. 
import {useState} from 'react'
import ExpenseFormOpen from "./ExpenseFormOpen"
import ExpenseFormClosed from "./ExpenseFormClosed"
//Card compnent to add a div with rounded corners. This concept is called "composition".
function ExpenseFormContainer(props) {

    //Hooks for state
    const [isFormOpen, setisFormOpen] = useState();

    //d is the JSON object of one expense
    const submitHandler = d => {
        props.onFormSubmit(d);
    }

    //The button being clicked will send info up the chain to here
    const clickHandler = isOpen => {
        setisFormOpen(isOpen)
        console.log(isOpen);
    }

    //Conditionally render either the closed form or the open form
    if(isFormOpen){ 
        return <ExpenseFormOpen onFormSubmit={submitHandler} name="test" onButtonClick={clickHandler} />
    } else{ 
        return <ExpenseFormClosed onButtonClick={clickHandler} />
    }
  }

  export default ExpenseFormContainer;