import {useState} from 'react'
import ExpenseFilter from './ExpenseFilter';
import Card from "./Card"
import {createExpense} from "./ExpenseItem"

//this is the main App
function Expenses(props) {

  //Hooks for state
  const [year, setYear] = useState("2023");

  //updates the state of <Expense />
  function filterHandler(y) {
    setYear(y)
  } 

  //filtered array based on state variable year
  let filteredArray = props.array.filter(a => {
    return a.year == year;
  })

 return (
    <Card className="outerMostContainer">
        <ExpenseFilter defaultYear={year} onfilterChange={filterHandler}/>
         {filteredArray.map(createExpense)} {/*This is called Array.length times. each time it will return a new <ExpenseItem /> component. */}
    </Card>
 );
}

export default Expenses;
