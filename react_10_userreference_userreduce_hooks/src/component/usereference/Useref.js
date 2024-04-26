import React, { useEffect, useRef } from "react";
const Useref =()=>{
    let data= useRef([])
    /*  const handelsubmit=(e)=>{
         e.preventDefault()
         console.log('clicked')
     } */
    function handelsubmit(e){
         e.preventDefault()
         let value=data.current.value
         console.log('click',value)
     }
     useEffect(()=>{
         data.current.focus()
     },[])
return(
    <>
    <center>
    <h1>user reference</h1>
        <form>

            <input ref={data} className="form-control w-50 my-3 " type="text" placeholder="Enter your name"/>

            
            <button className="btn btn-primary" onClick={handelsubmit}>Sumbit</button>
        </form>
    </center>
    </>
)
}
export default Useref;
