import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPokemonName,
  getPokemons,
} from "../../Redux/actions";
import style from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getPokemonName(name.toLocaleLowerCase()));
    setName("")
  };

  const clickHanlder = () => {
    dispatch(getPokemons());
    setName("")
  };

  return (
    <div className={style.main}>
      <form onSubmit={submitHandler}>
        <input
          name="text"
          placeholder="Type here..."
          type="text"
          value={name}
          onChange={changeHandler}
          className={style.input}
        />
        <button className={style.button}>Filter</button>
      </form>
      <button className={style.button} onClick={clickHanlder}>Reload</button>
    </div>
  );
};
export default Search;
