import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch()
  const [valor,setValor] = useState("");

  const pepito = (event) =>{
    setValor(event.target.value)
  }
  const enter = (event)=>{
    event.preventDefault()

  }

  return (
    <form onSubmit={enter}>
        <input type="" value={valor} onChange={pepito}/>
    </form>
  );
};
export default Search;