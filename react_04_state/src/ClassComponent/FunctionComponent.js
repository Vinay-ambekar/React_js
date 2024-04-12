import React,{ useState } from "react";

const FunctionComponent=()=>{
    const [count, setCount] = useState(0);//use state is a hooks
   
    return(
        <div>
            <center className="mt-3">
            <h2>I am function component</h2>
                <h3>Count: {count}</h3>
                <button className="btn btn-primary me-3" onClick={() => setCount(count + 1)}>Increment</button>
                <button className="btn btn-danger me-3" onClick={() => setCount(count - 1)}>Decrement</button>
                <button className="btn btn-secondary me-3" onClick={() => setCount(0)}>Decrement</button>
            </center>
        </div>
    )
}
export default FunctionComponent;