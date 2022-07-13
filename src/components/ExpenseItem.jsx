import "./ExpenseItem.css"
import Card from "./Card";

//This defined what an <ExpenseItem /> should look like. It uses another compennt <Card /> 

function ExpenseItem(props) {
  return (
    <Card className="container">
      <div id="left-container">
        <div className="date-container">
          <Card className="date">
            <div className="month">{props.month}</div>
            <div className="year">{props.year}</div>
            <div className="day">{props.day}</div>
          </Card>
        </div>
        <div id="item">{props.item}</div>
      </div>
      <Card 
        className="cost">{props.cost}
      </Card>
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

//array of all the expenses to be displayed.
let expenseItems = [
  {
    key:"1",
    day: "19",
    month: "December",
    year: "2022",
    item: "Birthday Lunch - a very expensive meal. This is just test text to prove a pointppppppppppppppppppppppppp.",
    cost: "$168.46"
  },
  {
    key:"2",
    day: "14",
    month: "August",
    year: "2022",
    item: "Car Insurance :(",
    cost: "$700.00"
  },
  {
    key:"3",
    day: "3",
    month: "October",
    year: "2022",
    item: "Hot Date",
    cost: "$1.16"
  }
]

export { createExpense, expenseItems };