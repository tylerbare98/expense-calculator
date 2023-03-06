import './ExpenseItem.css'
import { Paper, Container, Grid, Typography } from '@material-ui/core';

//This defined what an <ExpenseItem /> should look like. It uses another compennt <Card /> 
function ExpenseItem(props) {
  console.log(props)
  return (
    <Container>
    <Paper className="container" elevation={3} >
      <Grid container spacing={2} >
        <Grid item xs={12} sm={4} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Typography color="primary" variant="body1" >{props.date}</Typography>
        </Grid>
        <Grid item xs={12} sm={4} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography color="primary" variant="body1" >{props.item}</Typography>
        </Grid>
        <Grid item xs={12} sm={4} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography color="primary" variant="body1" >{props.cost}</Typography>
        </Grid>
      </Grid> 
    </Paper>
    </Container>
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

export {createExpense};