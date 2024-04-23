import { useEffect, useState } from "react";

const Todolist=()=>{
    const [input,setinput]=useState('')
    const [list,setlist]=useState([])
    const [Updateid,setUpdateid]=useState()
    const [btns,setbtns]=useState(false)
   
   // console.log('list',list.length)
   
    const handelinput=(e)=>{
        setinput(e.target.value)
    }
    const handeladd=()=>{
        input.length>0 && setlist([...list,input])
        setinput('')
       
    }
    const handledelet=(i)=>{
        const filterlist=list.filter((elem)=> elem!==list[i])
        setlist(filterlist)
    }
    const handledit=(i)=>{
        const filterlist=list.filter((elem)=> elem===list[i])
        setinput(filterlist[0])
        setUpdateid(i)
        setbtns(true)
    }
    const handelupdate=()=>{
        list.splice(Updateid,1,input)
        setinput('')
        setbtns(false)   
    }
    const handleClearAll = () => {
        setlist([]); 
      };

    return(
        <>
        <p className="text-black fs-4 fw-bold text-center mt-3">Tod-List</p>
        <div className="container-fluid d-flex justify-content-center my-2">
            <div className="card w-50 shadow-lg pt-3">
            <div className="row align-items-center ms-5 p-2">
                <div className="col input-group">
                    <span className="input-group-text">Text:</span>
                    <input type="text" value={input} onChange={handelinput} className="form-control"/>
                </div>
                <div className="col ">{
                btns?<button className="btn btn-primary w-25"onClick={handelupdate}>Update</button>:<button className="btn btn-primary me-3 w-25" onClick={handeladd}>Add</button>
                }
                </div>
                <div className="col-12 my-3">
                    <table className="table w-75">
                        <tbody>
                          { list.map((item,i)=>(
                                 <tr key={i}>
                                 <td className="col">{item}</td>
                                 <td className="col-2 text-end"> <button className="btn btn-white" onClick={()=>{handledit(i)}}><i className="fas fa-edit text-success"></i></button></td>
                                 <td className="col-2 text-end"> <button className="btn btn-white" onClick={()=>{handledelet(i)}}><i className="fa fa-trash text-danger" ></i></button></td>
                                </tr>
                          ))}
                        </tbody>
                    </table>
                </div>
                <div className={ list.length > 0 ? "d-block" : "d-none"}>
               <button className='btn btn-danger w-25' onClick={handleClearAll}>clear all</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Todolist;