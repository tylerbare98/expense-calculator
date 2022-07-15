import "./DateBox.css"
import Card from "./Card";

//This defined what an <DateBox /> should look like. It uses another compennt <Card /> 
function DateBox(props) {
  return (
    <Card className="date">
        <div className="month">{String(props.month)}</div> {/*String method here to catch empty Date object*/}
        <div className="year">{String(props.year)}</div>
        <div className="day">{String(props.day)}</div>
    </Card>
  )
}

export default DateBox;