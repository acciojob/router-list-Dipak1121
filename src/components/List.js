import React from "react";
import { useNavigate } from "react-router-dom";
const List = ()=>{

    let navigate = useNavigate();

    return(
        <div>
        <h1>Item List</h1>
        <ul>
          <li onClick={()=>{navigate("/items/1")}}>Item 1</li>
          <li onClick={()=>{navigate("/items/2")}}>Item 2</li>
          <li onClick={()=>{navigate("/items/1")}}>Item 3</li>
        </ul>
        </div>
    )
}

export default List;