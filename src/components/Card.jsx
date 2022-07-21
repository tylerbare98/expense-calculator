import "./Card.css"  
//Card compnent to add a div with rounded corners. This concept is called "composition".
function Card(props) {
    //allows Card to take attribute className when it is called and also the Card.css
    const classes = 'card ' + props.className;

    return (
      //this line allows other components to nest inside a Card component
      <div className={classes}>{props.children}</div>
    )
  }

  export default Card;