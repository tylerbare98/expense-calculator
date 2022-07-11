import "./ExpenseItem.css"

function ExpenseItem(props) {
  return (
    <div id="container">
    <div id ="left-container">
      <span id="date">{props.date}</span>
      <span id="item">{props.item}</span>
    </div>
      <span id="cost">{props.cost}</span>

    </div>
  )
}

function createExpense(expense)
{
  return(
    <ExpenseItem date={expense.date} item={expense.item} cost={expense.cost} />
  )
}


let expenseItems = [
  {
    date: "June 19, 2022",
    item: "Birthday Lunch - very expensive meal",
    cost: "$169.420"
  },
  {
    date: "June 19, 2022",
    item: "Car Insurance :(",
    cost: "$700.00"
  },
  {
    date: "June 19, 2022",
    item: "Hot Date",
    cost: "$1.16"
  }
]

export { createExpense, expenseItems };