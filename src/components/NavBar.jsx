import {AppBar,Toolbar,Typography} from '@mui/material';
import { Switch, FormControlLabel } from '@material-ui/core';
import CalculateIcon from '@mui/icons-material/Calculate';


const NavBar = (props) => {
    
    const handler = () => {
        props.setDarkMode(darkMode =>  {return !darkMode})
    }
    
    return (
    <AppBar position="static" sx={{marginBottom:"35px"}} >
        <Toolbar>
         <CalculateIcon sx={{marginRight:"15px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Expense Calculator
          </Typography>
          <FormControlLabel
            control={
                <Switch
                checked={props.darkMode}
                onChange={handler}
                name="darkMode"
                color="primary"
                />
            }
            label={props.darkMode?'Dark':'Light'}
          />
        </Toolbar>
    </AppBar>
    )
}

export default NavBar