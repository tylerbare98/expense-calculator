import "./ExpenseButton.css" 


function ExpenseButton(props) {

  //This will notify the parent(Either FormClosed.jsx or FormOpened.jsx) that there has been a click
  const callParentFunc = e => {
    props.onButtonClick()
  }

    return (
      <button type={props.buttonType} className="form-button" onClick={callParentFunc}>{props.buttonText}</button>
    )
  }

  export default ExpenseButton;