import "./ExpenseFilter.css"  

function ExpenseFilter(props) {

  //handlers
  const filterHandler = e => {
    props.onfilterChange(e.target.value);
  }

    //this renders a year filter and passes the selected year to the parent
    return (
      <div className="filter-container">
        <h3 className="filter-text">Filter by year</h3>
        <div>
          <select name="Year" className="classic" 
                  defaultValue={props.defaultYear} //two way binding with parent
                  onChange={filterHandler}> {/*send selected year of filter to parent-component*/}
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          </div>
      </div>
    )
  }

  export default ExpenseFilter;