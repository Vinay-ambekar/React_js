import React from "react";
import { Component } from "react";
import Formvlidation from '../Classcomponent/Formvlidation.module.css'



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
            firstNameerr='please do not enter a number'   
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
            <form className={Formvlidation.forms} >
                <div className={Formvlidation.inputs}>
                <label >Frist Name: </label>
                <input type="text" name='firstName' onChange={this.handlechange} value={this.state.firstName} placeholder="First Name"/>
                </div>
                <span className={Formvlidation.spans}>{this.state.firstNameerr}</span>
                
                <div className={Formvlidation.inputs}>
                <label >Password: </label>
                <input type='password' name='password' onChange={this.handlechange} value={this.state.password} placeholder="Password"/>
                </div>
                <span className={Formvlidation.spans}>{this.state.passworderr}</span>
                <button onClick={this.hadlesubmit}>submit</button>
          </form>
            </>
        )
    }
}
export default Formvalidation;