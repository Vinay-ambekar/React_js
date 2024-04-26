import { useReducer } from "react";

/* reducer function */
const reducer=(currentState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return currentState+action.payload
        case 'DECEREMENT':
            return currentState-action.payload
    }
}
const Usereduce =()=>{
  const [count,dispathc]=useReducer(reducer,0)
  /* increment function */
  const increment=()=>{
   // console.log('increment')
    dispathc({
        type:'INCREMENT',
        payload:5
    })
  }
  /* decerement function */
  const decrement=()=>{
   // console.log('decrement')
    dispathc({
        type:'DECEREMENT',
        payload:5
    })
  }
    return(
        <>
        <center>
        <h1>userReduce</h1>
        <h2>Count:{count}</h2>
        <button className="btn btn-primary me-3" onClick={increment}>increment</button>
        <button className="btn btn-primary" onClick={decrement}>increment</button>
        </center>
        </>
    )
    }
    export default Usereduce;