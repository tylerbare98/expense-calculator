import "./ExpenseFormOpen.css"
import {useState} from 'react'
import { Container, Paper, Button, Grid, TextField } from '@material-ui/core';
import useStyles from '../MuiStyles'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

function ExpenseFormOpen(props) {
  const classes = useStyles();

  //hooks to control state: inputs is one object holding the entered form data
  const [titleError, setTitleError] = useState();
  const [amountError, setAmountError] = useState();
  const [dateError, setdateError] = useState(false);
  const [date, setDate] = useState(dayjs());
  const [inputs, setInputs] = useState({
      title: "",  
      amount: ""   
  }); //empty JSON object of the inputs, initialized to make compiler happy

  //called when the value of input changes. ie) when user types something
  const titleChangeHandler = (event) => {
    (event.target.value !== "") ? setTitleError(false) : setTitleError(true); 
    setInputs(values => ({...values, ["title"]: event.target.value})) //spread operator just writes values in values object, overwriting with the new data
  }

  const amountChangeHandler = (event) => {
    (event.target.value > 0) ? setAmountError(false) : setAmountError(true);
    setInputs(values => ({...values, ["amount"]: event.target.value}))
  }


  //called when user clicks the submit button
  const submitHandler = (event) => {
    event.preventDefault(); //prevent lame default html form stuff
    console.log(inputs)
    console.log(date)

    //cancel this function if all fields are not filled out
    let returnFlag = false
    if(!inputs.title) {
      setTitleError(true)
      returnFlag = true;
    } 
    if(!inputs.amount ){
      setAmountError(true) 
      returnFlag = true;
    }
    if(returnFlag === true)
      return;

    //clear inputs on submit
    setInputs({
      title: "",
      amount: ""
    });
    props.onFormSubmit(inputs); //handler-function pointer from parent. Now we pass the inputs up to the parent

    //notify the parent FormContainer that we want isOpen to be false(closes form)
    props.onButtonClick(false)
  }

  //notify the parent FormContainer that we want isOpen to be false(closes form)
  const clickHandler = () => {
    props.onButtonClick(false)
  }

  //<ExpenseForm /> component For user to add expenses
  return (
    <>
    
    <Container maxWidth="md" >
      <Paper className={classes.paper + ' ' + classes.closedContainer}>
      
      <form noValidate onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField label="Expense Name" fullWidth name="title" onChange={titleChangeHandler} error={titleError}/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Expense Amount" type="number" name="amount" onChange={amountChangeHandler} error={amountError}
              fullWidth inputProps={{ min: 0, max: 999999.99, }}
             />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>   
                <DatePicker
                  onChange={(date) => setDate(dayjs(date))}
                  value={date}
                  label="Date of Expense"
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button variant="outlined" style={{ marginRight: 10 }} onClick={clickHandler}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit" onClick={submitHandler}>Add</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </Container>
    </>
  )
}

export default ExpenseFormOpen;