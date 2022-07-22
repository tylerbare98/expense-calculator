/*
    This creates an error module that takes a custom error type so it can be reused. 
*/

import "./ErrorModal.css"  
import Card from "../components/Card"
import ExpenseButton from "../components/ExpenseFormContainer/ExpenseButton"


function ErrorModal(props) {
    
    return (
      <div className="EModal-background" onClick={props.exitModal}> {/*button click outside modal*/}
        <div>
        <Card className="EModal-container" >
        <div onClick={e => e.stopPropagation()}> {/*prevents a click inside modal*/}
            <div className="EModal-header">
                An Error occured!
            </div>
            <div className="EModal-body">
                {props.errorText} 
            </div>
            <div className="EModal-footer">
                <ExpenseButton buttonText="Okay" onButtonClick={props.exitModal}/> {/*button click on button*/}
            </div>
        </div>
        </Card>
        </div>
      </div>
    )
  }

  export default ErrorModal;