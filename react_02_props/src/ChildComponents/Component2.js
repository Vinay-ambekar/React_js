import React from "react";
import { Component } from "react";

class Component2 extends Component{

    render(){
        let [vegitable,laptops,ArrObjes]=[this.props.vegi,this.props.laptop,this.props.ArrObjes]
        return(
            <div>
                <center>
                    <h2>i am child component2</h2>
                    <p>vegitabel:{vegitable}</p>
                    <b>array laptop: {laptops.join(' ')} </b>
                    <b>using map methd laptop arrays</b>
                    {
                        laptops.map((lap,index)=>{
                          return  <p key={index}>{lap}</p>
                            
                        })
                    }
                     <b>array of objects we are using map method </b>
            {ArrObjes.map((obje,index)=>{
                return(
                    <div style={{border:'1px solid black',margin:'5px',width:'20rem',textAlign:'center'}} key={index}>
                        <p>name:{obje.name}</p>
                        <p>age:{obje.age}</p>
                        <p>work:{obje.work}</p>
                    </div>
                )
            })}
                </center>
            </div>
        )
    }
}

export default Component2;