import "./ExpenseItem.css"
import Card from "./Card";

//This defined what an <ExpenseItem /> should look like. It uses another compennt <Card /> 

function ExpenseItem(props) {
  return (
    <Card className="container">
      <div id="left-container">
        <div id="date">{props.date}</div>
        <div id="item">{props.item}</div>
      </div>
      <Card className="cost">{props.cost}</Card>
    </Card>
  )
}

//This will create and return one <ExpenseItem /> component to be called by Array.map. 
function createExpense(expense)
{
  return(
    <ExpenseItem 
      key={expense.key}
      date={expense.date} 
      item={expense.item} 
      cost={expense.cost}    
    />
  )
}

//array of all the expenses to be displayed.
let expenseItems = [
  {
    key:"1",
    date: "June 19, 2022",
    item: "Birthday Lunch - very expensive meal",
    cost: "$168.46"
  },
  {
    key:"2",
    date: "June 19, 2022",
    item: "Car Insurance :(",
    cost: "$700.00"
  },
  {
    key:"3",
    date: "June 19, 2022",
    item: "Hot Date",
    cost: "$1.16"
  }
]

export { createExpense, expenseItems };