import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './functionalComponent/FunctionalComponent';
import ClassComponent from './ClassComponent/ClassComponent';
import { ArrowFunctionComponent } from './ArrowfunctionComponent/ArrowFunctionComponent';//here i am exporting and importing is different 

/* functional component */
function App() {
  return (
  <div>{/*here we use virtual dom : is copy of real dome, it takes the copy and update the props,
  (diffing algorithem and reconciliaction : (it compare the previous virtual dom and current one and update it))
  ,(jsx conversion is going to be use called babble)*/}
<FunctionalComponent/>{/* importing functional component */}
<ClassComponent></ClassComponent>  {/* importing class component */}
<ArrowFunctionComponent/>
  </div>
  );
}

export default App;
