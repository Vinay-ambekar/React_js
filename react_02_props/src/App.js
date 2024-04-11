import logo from './logo.svg';
import './App.css';
import Component1 from './ChildComponents/Component1';
import Component2 from './ChildComponents/Component2';
import { Component3 } from './ChildComponents/Componet3';

function App() {//it parent component(react is unidirectional component it means data will flow from parent to child for that parpose we will use props)
// i am using props here 
let vegitabel1='apple'
let laptop=['linov','thinkpad','rizen']
let arrObjs=[
  {name:'vikas',age:29,work:'ui developer'},
  {name:'suraj',age:20,work:'ux developer'},
  {name:'rahul',age:25,work:'ui/ux developer'},
  {name:'snehith',age:27,work:'ui/react developer'},
]
  return (
   <div>
    <Component1 vegi={vegitabel1} laptops={laptop} ArrObjes={arrObjs}/>
    <Component2 laptop={laptop} vegi={vegitabel1} ArrObjes={arrObjs}/>
    <Component3 laptop={laptop} vegi={vegitabel1} ArrObjes={arrObjs}></Component3>
   </div>
  );
}

export default App;
