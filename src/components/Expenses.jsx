import {useState} from 'react'
import ExpenseFilter from './ExpenseFilter';
import { Container, Paper, Typography } from '@material-ui/core';
import {createExpense} from "./ExpenseItem"
import useStyles from './MuiStyles'

//this is the main App
function Expenses(props) {
  const classes = useStyles();

  //Hooks for state
  const [year, setYear] = useState("2025");

  //updates the state of <Expense />
  function filterHandler(y) {
    setYear(y)
  } 

  //filtered array based on state variable year
  let filteredArray = props.array.filter(a => {
    return a.date.split('/')[2] == year;
  })

 return (
      <Container maxWidth="md" >
        <Paper className={classes.paper + ' ' + classes.expensesContainer}>
        <ExpenseFilter defaultYear={year} onfilterChange={filterHandler}/>    
        {filteredArray.map(createExpense)} 
        </Paper>
      </Container>
 );
}

export default Expenses;
