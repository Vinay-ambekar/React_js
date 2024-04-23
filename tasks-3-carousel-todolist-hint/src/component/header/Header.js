import  '../header/header.css'
import { Link } from 'react-router-dom'

const Header=()=>{
    return(
        <>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         
          <Link to='/' className='link me-5'>Home</Link>
          <Link to='/carousel' className='link me-5'>Carousl</Link>
          <Link to='/todolist' className='link me-5'>Todo list</Link>
          <Link to='/adg' className='link'>AdviceGenerator</Link>
         
        </li>
      </ul>
    </div>
</nav>

        </>
    )
}
export default Header