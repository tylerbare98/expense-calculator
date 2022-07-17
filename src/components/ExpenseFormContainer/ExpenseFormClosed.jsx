import "./ExpenseFormClosed.css"
import Card from "../Card";
import ExpenseButton from "./ExpenseButton";

function ExpenseFormClosed(props) {

  //notify the parent FormContainer that we want isOpen to be true
  const clickHandler = () => {
    props.onButtonClick(true)
  }

  ///<ExpenseForm /> component For user to add expenses
  return (
    <>
    <h1 className="heading">Expenses</h1>
    <Card className="formClosed-container">
       <ExpenseButton className="form-button" buttonType="button" buttonText="Add New Expense" 
                      onButtonClick={clickHandler}
       />
    </Card>
    </>
  )
}

export default ExpenseFormClosed;