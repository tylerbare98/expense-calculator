import "./DateBox.css"
import Card from "./Card";

//This defined what an <DateBox /> should look like. It uses another compennt <Card /> 
function DateBox(props) {
  return (
    <Card className="date">
        <div className="month">{props.month}</div>
        <div className="year">{props.year}</div>
        <div className="day">{props.day}</div>
    </Card>
  )
}

export default DateBox;