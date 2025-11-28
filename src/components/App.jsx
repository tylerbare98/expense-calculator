import { useState } from 'react';
import "./App.css"
import ExpenseFormContainer from './ExpenseFormContainer/ExpenseFormContainer';
import Expenses from './Expenses';
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {CssBaseline, Paper} from '@material-ui/core/';


//this is the main App
function App() { 

  //"use state" hooks
  const [darkMode, setDarkMode] = useState(true) 
  const [expenses, setData] = useState([]) 
  
  //this captures new expense data from the child component <ExpenseForm />
  const formSubmitHandler = (inputs, date) => {

    //parsing variable to add new expense item data to the array
    let key = (expenses.length + 1);
  
    const formattedDate = date.format('DD/MM/YYYY');
    
      //updates teh data variable and the state hook knows to re render the DOM
      setData([
        {
          key: key,
          date: formattedDate,
          item: inputs.title,
          cost: "$" + inputs.amount
        },
        ...expenses
      ])
  }

  //creating theme for project
  const theme = createTheme({
    palette: {
      type: darkMode?'dark':'light',
      primary: {
        main: '#64b5f6',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <NavBar setDarkMode={setDarkMode} darkMode={darkMode}/>
        <ExpenseFormContainer onFormSubmit={formSubmitHandler}/>
        <Expenses array={expenses} />
    </ThemeProvider>
  );
}

export default App;
