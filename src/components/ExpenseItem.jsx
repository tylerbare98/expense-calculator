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