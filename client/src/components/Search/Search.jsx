import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByApi,
  filterByDb,
  getPokemonName,
  getPokemons,
  sortByAttack,
  sortByName,
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
  const clickHanlderDb = () => {
    dispatch(filterByDb());
  };
  const clickHanlderApi = () => {
    dispatch(filterByApi());
  };
  const clickHandlerAttack = (e) => {
    dispatch(sortByAttack(e.target.value));
  };
  const clickHandlerName = (e) => {
    dispatch(sortByName(e.target.value))
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          name="text"
          placeholder="Type here..."
          type="text"
          value={name.toLocaleLowerCase()}
          onChange={changeHandler}
        />
        <button>Filter</button>
      </form>
      <button onClick={clickHanlderApi}>Filter Api</button>
      <button onClick={clickHanlderDb}>Filter Create</button>
      <button value="desc" onClick={clickHandlerAttack}>
        -ATCK
      </button>
      <button value="asc" onClick={clickHandlerAttack}>
        +ATCK
      </button>
      <button value="asc" onClick={clickHandlerName}>A-Z</button>
      <button value="desc" onClick={clickHandlerName}>Z-A</button>
      <button onClick={clickHanlder}>Reload</button>
    </div>
  );
};
export default Search;
