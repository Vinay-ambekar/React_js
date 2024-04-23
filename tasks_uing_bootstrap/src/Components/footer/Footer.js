
import { Link } from 'react-router-dom';

const Footer=()=>{
    return(
        <>
        <div className='position-fixed bottom-0 start-0 w-100'>
        <nav className="navbar navbar-expand-lg bg-warning shadow-4">
            <div className="container-fluid justify-content-between">
                <div className="logo">
                    <Link to='/'><img src="https://www.achieversit.com/assets/images/logo-white.png" className='img-fluid' alt="logo"/> </Link> 
                </div>
            </div>
        </nav>
        </div>
         
   
  
        </>
    )
}
export default Footer;