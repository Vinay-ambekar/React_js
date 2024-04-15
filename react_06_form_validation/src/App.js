import { Link } from 'react-router-dom';
import './App.css';
import Materialui from './component/MaterialUi/Materialui.jsx';
import Routing from './routing/Routing.jsx';


function App() {
  return (
    <>
      <center>
        <Link to='/forv' >form validation in class component </Link>
        <Link to='/miui'>form validation in function component using metrial ui </Link>
        <Routing></Routing>
      </center>
    </>
  );
}

export default App;
