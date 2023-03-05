import {useState} from 'react'
import ExpenseFilter from './ExpenseFilter';
import { Container, Paper } from '@material-ui/core';
import {createExpense} from "./ExpenseItem"
import useStyles from './MuiStyles'

//this is the main App
function Expenses(props) {
  const classes = useStyles();

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
      <Container maxWidth="md" >
        <Paper className={classes.paper + ' ' + classes.expensesContainer}>
        <ExpenseFilter defaultYear={year} onfilterChange={filterHandler}/>
        {filteredArray.map(createExpense)} {/*This is called Array.length times. each time it will return a new <ExpenseItem /> component. */}
        </Paper>
      </Container>
 );
}

export default Expenses;
