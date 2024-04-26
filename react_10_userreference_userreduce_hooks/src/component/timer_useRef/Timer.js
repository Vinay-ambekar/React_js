import { useRef } from "react"

const Timer=()=>{
    let timref=useRef(null)
    let intervalref=useRef(null)

    const start=()=>{
        let second=0
        intervalref.current =setInterval(()=>{
            second++
            timref.current.textContent=`timer:${second} seconds`
        },1000)
    }
    const stopTimer=()=>{
        console.log('stop')
        clearInterval(intervalref.current);
    }

    return(
        <>
        <center>
            <h2 className="my-5" ref={timref}>Timer: 0 seconds</h2>
            <button className="btn btn-primary mx-2" onClick={start}>start</button>
            <button className="btn btn-primary mx-2" onClick={stopTimer}>stop</button>
            
        </center>
        </>
    )
}
export default Timer