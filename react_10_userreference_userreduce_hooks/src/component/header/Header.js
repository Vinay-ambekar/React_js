import { Link } from "react-router-dom";

import React from "react";
const Header =()=>{
    return(
        <>
        <div className="nav-bar bg-dark p-2">
            <button className="btn btn-outline-success fs-5 fw-bold m-2"><Link to='/useref' style={{textDecoration:'none',color:'white'}}>useReference</Link></button>
            <button className="btn btn-outline-success fs-5 fw-bold m-2"><Link to='/timer' style={{textDecoration:'none',color:'white'}}>timer useRef</Link></button>
            <button className="btn btn-outline-success fs-5 fw-bold m-2"><Link to='/usereduce' style={{textDecoration:'none',color:'white'}}>useReduce</Link></button>
        </div>
        </>
    )
    }
    export default Header;