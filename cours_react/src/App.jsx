import { useState } from 'react'
import './App.css'

function App() {
  const listePrenoms = ["Pierre", "Paul", "Jacques"];
  const helloList =  (    
    <div>
    <ul>
      {" "}
      {listePrenoms.map((prenom, index) => (
        <li key={index}>{prenom} </li>
      ))}{" "}
    </ul>
    </div>
  );      
  return <>{helloList}</>;
} 

export default App
