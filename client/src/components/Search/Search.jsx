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
    dispatch(getPokemonName(name));
  };

  const clickHanlder = () => {
    dispatch(getPokemons());
  };


  return (
    <div className={style.container}>
      <form onSubmit={submitHandler}>
        <input
          className={style.input}
          name="text"
          placeholder="Type here..."
          type="text"
          value={name.toLocaleLowerCase()}
          onChange={changeHandler}
        />
        <button className={style.bottone5}>Filter</button>
      </form>
      <form>
        <button className={style.bottone5} onClick={clickHanlder}>Reload</button>
      </form>
    </div>
  );
};
export default Search;
