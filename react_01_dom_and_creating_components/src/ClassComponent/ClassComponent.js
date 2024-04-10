import React, { Component } from "react";//wheil creatin class component importing react is must be done.or else it is not going to be render.

class ClassComponent extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                <center>
                    <h2>i am a class compoent</h2>
                </center>
            </div>
        )
    }
}

export default ClassComponent;

