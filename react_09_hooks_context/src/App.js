import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import { createContext } from 'react';



function App() {
  const MyContext = createContext('helo i am in parent component'); 
  return (
<>
<center>
<MyContext.Provider value="Hello from context">
      {/* Components that can consume the context */}
      <Parent/>
</MyContext.Provider>

</center>
</>
  );
}

export default App;
