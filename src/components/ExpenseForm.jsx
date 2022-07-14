import "./ExpenseForm.css"
import Card from "./Card";


function ExpenseForm(props) {
  return (
    <Card className="form-container">
      <form action="/action_page.php">
        {/*Row1: Title and Amount*/}
        <div>
          <div className="form-section">
            <label>Title</label><br/>
            <input type="text"/>
          </div>
          <div className="form-section">
            <label>Amount</label><br/>
            <input type="number"/>
          </div>
        </div>
        
        {/*Row2: Date and submit button*/}
        <div>
          <div className="form-section" >
            <label>Date</label><br/>
            <input type="date"/>
          </div>
          
          <div className="form-section">
            <input type="submit" value="Add Expense"></input>
          </div>
        </div>       
      </form> 
    </Card>
  )
}



export default ExpenseForm;