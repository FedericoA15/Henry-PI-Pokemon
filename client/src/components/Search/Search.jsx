import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName, getPokemons } from "../../Redux/actions";

const Search = () => {
  const dispatch = useDispatch()
  const [valor,setValor] = useState("");

  const changeHandler = (event) =>{
    setValor(event.target.value)
  }
  const submitHandler = (event)=>{
    event.preventDefault()
    dispatch(getPokemonName(valor))
  }
  const clickHanlder = () => {
    dispatch(getPokemons())
  }

  return (
    <form onSubmit={submitHandler}>
        <input type="" value={valor} onChange={changeHandler}/>
        <button>Subir</button>
        <button onClick={clickHanlder}>Reset</button>
    </form>
  );
};
export default Search;