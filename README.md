##### To run: copy the ENTIRE line below into a browser
gitpod.io/#https://github.com/tylerbare98/expense-calculator

##### Imperative/Declarative
Imperative approach is giving step by step instruction on how to get to the end state, while declarative approach is just giving the end result and React does all the steps to get there. 

##### Programming Paradigms
Procedural, Functional, Object Oriented, Component Oriented. Even though javascript has callbacks, it is not function because functional programming also has immutable data and a focus on recursion over looping. 

##### Controlled/Uncontrolled Component 
Controlled Component("dumb component"): takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.
Uncontrolled Component: stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

##### Div Soup
Using too many nested divs makes browser render slower. But JSX components require returned code to be wrapped on element, like a div. The solution is to create a a custom wrapper component that literally only returns props.children. This way you aren't returned a new DOM element like a div required by JSX, you are just returning the inner elements. This solution is actually built into react. You can wrap everything in <React.Fragment>. OR, if your project is set up correctly, you can use <></> to wrap everything and <> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.
