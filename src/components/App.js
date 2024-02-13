
import React from "react";
import './../styles/App.css';
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import List from "./List";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {

  let navigate = useNavigate();

  return (
    <div>
        
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/items/1" element={<Item1/>} />
          <Route path="/items/2" element={<Item2/>} />
          <Route path="/items/3" element={<Item3/>} />
        </Routes>
    </div>
  )
}

export default App
