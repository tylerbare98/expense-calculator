import "./ExpenseFormClosed.css"
import { Container, Paper, Button } from '@material-ui/core';
import useStyles from '../MuiStyles'


function ExpenseFormClosed(props) {
  const classes = useStyles();

  //notify the parent FormContainer that we want isOpen to be true
  const clickHandler = () => {
    props.onButtonClick(true)
  }

  ///<ExpenseForm /> component For user to add expenses
  return (
    <Container maxWidth="md" >
      <Paper className={classes.paper + ' ' + classes.closedContainer}>
       <Button variant="outlined" className={classes.button} color="primary" onClick={clickHandler}>Add Expense</Button>
       </Paper>
    </Container>
  )
}

export default ExpenseFormClosed;