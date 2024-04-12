import { Link } from "react-router-dom";

function Header(){
    return(
<>
<div className="container-fluid bg-dark p-2 ">
    <ul className="nav nav-pills mb-3 d-flex justify-content-center align-items-center" >
        <li className="nav-item" >
            <Link to='/'  className="fs-5 fw-medium me-3 text-light text-decoration-none">Home</Link> 
        </li>
        <li className="nav-item" >
            <Link to='/arrays'  className="fs-5 fw-medium me-3 text-light text-decoration-none">Phone</Link>
        </li>
        <li className="nav-item" >
          <Link to='/objects' className="fs-5 fw-medium me-3 text-light text-decoration-none">Data</Link>
        </li>
    </ul>
</div>
</>
    )
}
export default Header;