import React from "react";
import { Component } from "react";

class ClassComponent extends Component{
    constructor(props) {
        super(props);
        /* this.state = {
          count: 0
        }; */
      }
    state={
        count:0
    }//it was intial state 
    handelIncrement=()=>{
        this.setState({count:this.state.count+1})//we can access update usin this.setState 
    }
    handelDecrement(){
        this.setState({count:this.state.count-1})
    }
    handelReset=()=>{
        this.setState({count:this.state.count = 0 })
    }
    render(){
        return(
            <div>
                <center>
                    
                    <h2>Clas componetn</h2>
                    <h3>count: {this.state.count}</h3>{/* we can access using this.state */}
                    <button className="btn btn-primary me-2" onClick={this.handelIncrement}>increment</button>
                    <button className="btn btn-danger me-2" onClick={()=>this.handelDecrement()}>decrement</button>
                    <button className="btn btn-secondary" onClick={this.handelReset}>Reset</button>
                    {/* When the state changes, React automatically re-renders the component to reflect the updated state */}
                </center>
            </div>
        )
    }

}
export default ClassComponent;