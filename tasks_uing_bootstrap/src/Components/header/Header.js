
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-warning shadow-4">
        <div className="container-fluid justify-content-between">
            <div className="logo">
                <Link to='/'><img src="https://www.achieversit.com/assets/images/logo-white.png" className='img-fluid w-sm-25' alt="logo"/> </Link> 
            </div>
            <div className="icons">
                <span className="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-toggler-icon-custom"></span>
                </span>
            </div>
        </div>
        <div className="collapse navbar-collapse px-4 icons" id="navbarSupportedContent">
            <Link style={{textDecoration:'none'}} to='/' ><p className="text-dark fs-5 fw-medium  mx-2">Home</p></Link>  
            <Link style={{textDecoration:'none'}} to='/count'><p className="text-dark  fs-5 fw-medium  mx-2">Count</p></Link>  
            <Link style={{textDecoration:'none'}} to='/contactus'><p className="text-dark  fs-5 fw-medium  mx-2">Login</p></Link>  
            <Link style={{textDecoration:'none'}} to='/userlist'><p className="text-dark  fs-5 fw-medium  mx-2">Userlist</p></Link>  
            <Link style={{textDecoration:'none'}} to='/pagination'><p className="text-dark  fs-5 fw-medium  mx-2">Pagination</p></Link>  
        </div>
    </nav>
   
  
        </>
    )
}
export default Header;