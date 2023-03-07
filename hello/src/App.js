import './App.css';
import Element from './components/Element';
import { useState } from 'react';

function App() {
  const [pose , setpose] = useState("");
  const user_available = true;
  return (
    <div className="App">
      <input type='text' onChange={(e) =>{
        setpose(e.target.value);
      }}></input>
      {
        user_available ? 
        <Element name = "Godfred is " position = {pose}/>
        :
        <h2>User not registered</h2>
      }
    </div>
  );
}

export default App;