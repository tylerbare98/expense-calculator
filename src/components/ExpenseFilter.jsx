import "./ExpenseFilter.css"
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


function ExpenseFilter(props) {

  //handlers
  const filterHandler = e => {
    props.onfilterChange(e.target.value);
  }

    //this renders a year filter and passes the selected year to the parent
    return (
      <div className="filter-container">
        <Typography variant="h6" component="h6" >Filter By Year</Typography>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.defaultYear}
            onChange={filterHandler} 
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }

  export default ExpenseFilter;