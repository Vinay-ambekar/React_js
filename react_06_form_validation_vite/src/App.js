import { Link } from 'react-router-dom';
import './App.css';
import Routing from './routing/Routing.jsx';
import { Button } from '@mui/material';


function App() {
  return (
    <>
      <center>
        <Link to='/forv' style={{ textDecoration:'none'}} > <Button variant='contained'>form validation in class component</Button> </Link>

        <Link to='/miui' style={{ textDecoration:'none'}}><Button variant='contained'>form validation in function component using metrial ui</Button> </Link>
        <Routing></Routing>
      </center>
    </>
  );
}

export default App;
