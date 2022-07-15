import "./ExpenseFilter.css"  
import Card from "./Card"

function ExpenseFilter(props) {
  

    return (
      <div className="filter-container">
        <h3 className="filter-text">Filter by year</h3>
        <div>
          <select name="Year" className="classic">
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