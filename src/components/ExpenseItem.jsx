import "./ExpenseItem.css"
import DateBox from "./DateBox"
import Card from "./Card";

//This defined what an <ExpenseItem /> should look like. It uses another compennt <Card /> 
function ExpenseItem(props) {
  return (
    <Card className="container">
      <div id="left-container">
        <div className="date-container">
          <DateBox day={props.day} month={props.month} year={props.year}/>
        </div>
        <div id="item">{props.item}</div>
      </div>
      <div className="testing">
        <Card className="cost"> {props.cost}</Card>
      </div>  
    </Card>
  )
}

//This will create and return one <ExpenseItem /> component to be called by Array.map. 
function createExpense(expense)
{
  return(
    <ExpenseItem 
      key={expense.key}
      day={expense.day} 
      month={expense.month} 
      year={expense.year}
      item={expense.item} 
      cost={expense.cost}    
    />
  )
}

export {createExpense};