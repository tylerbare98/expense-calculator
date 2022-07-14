import "./ExpenseForm.css"
import Card from "./Card";


function ExpenseForm(props) {
  return (
    <Card>
      <form action="na">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
    </Card>
  )
}



export default ExpenseForm;