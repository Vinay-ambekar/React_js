import { Component } from "react";
import React from "react";

 class Counting extends Component{
    constructor(){
        super()
        /* this.state = {
            count:0
        } */
    }
    state = {
        count:0
    }
     handleIncrement = () => {
        this.setState({count: this.state.count + 1})
     }
     handleDecrement(){
      this.setState({count:this.state.count - 1})
     }
     handleReset=()=>{
      this.setState({count:this.state.count = 0})
     }
    render(){
        return(
             <>
        <center className="mt-3">
            <h2>Counter: {this.state.count}</h2>
            <button  className="btn btn-outline-success me-2 mt-2" onClick={this.handleIncrement}>Increment</button>
            <button  className="btn btn-outline-danger me-2 mt-2"  onClick={()=>this.handleDecrement()}>Decrement</button>
            <button  className="btn btn-outline-primary me-2 mt-2" onClick={this.handleReset}>Reset</button> 
          </center>
            </> 
        )
    }
    
}
export default Counting;



