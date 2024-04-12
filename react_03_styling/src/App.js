import logo from './logo.svg';
import './App.css';
import Externalcss from './Externalcss/Externalcss';
import ExternalModule from './ExternalModulecss/ExternalModule';

function App() {
  let internalStyle={
    container:{
      color:'orange',
      backgroundColor:'green',
      padding:'10px'
    }
  }
  return (
    <div>
      <center>
        <h2 style={{backgroundColor:'orange',padding:'10px'}}>Inline styling</h2>
        <h2 style={internalStyle.container} >internal styling</h2>
        <Externalcss/>
        <ExternalModule/>
     </center>
    </div>
  );
}

export default App;
