import React from "react";
import { Component } from "react";

class Formvalidation extends Component{
    
    state={
        firstName:'',
        password:'',
        firstNameerr:'',
        passworderr:''
    }
    
   handlechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   // console.log('name:',e.target.name)
   // console.log('input value:',e.target.value)
    }
     hadlesubmit=(e)=>{
        e.preventDefault()
      if(this.state.firstName&&this.state.password){
        console.log('first Namw:',this.state.firstName,'\nPassword:',this.state.password)
      }
        this.validateForm()
    }
    validateForm=()=>{
        let firstNameerr=''
        let passworderr=''
        const myRegex = /^[a-zA-Z]*$/; 
        if(this.state.firstName.length<4){
            firstNameerr='please enter more than 4 characters'
        }else if(this.state.firstName.length>10){
                firstNameerr='please enter less than 10 characters'
        }else if(!myRegex.test(this.state.firstName)){
            firstNameerr='Please enter only the English alphabets.'   
        }
        
            
        if(this.state.password.length<4){
            passworderr='please enter more than 4 characters passoword'
        }
        if(firstNameerr||passworderr){
            this.setState({firstNameerr,passworderr})
        }else{
            this.setState({firstNameerr,passworderr})
        }
    }
    
    render(){
        return(
            <>
                <div className="container d-flex justify-content-center">
                    <form className="w-75 w-xs-100">
                        <h2 className="ms-2 my-3">Log in</h2>
                        <div className="row container-fluid d-flex flex-column justify-content-center">
                            <div className="col mb-3">
                                <label className="form-label">First Name</label>
                                <input className="form-control" type="text" name='firstName' onChange={this.handlechange} value={this.state.firstName} />
                                <div className="form-text text-danger">{this.state.firstNameerr}</div>
                            </div>
                            <div className="col mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" type="password" name='password' onChange={this.handlechange} value={this.state.password} />
                                <div className="form-text text-danger">{this.state.passworderr}</div>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-primary w-100 fs-5 fw-medium" onClick={this.hadlesubmit}>Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>


      
            </>
        )
    }
}
export default Formvalidation;