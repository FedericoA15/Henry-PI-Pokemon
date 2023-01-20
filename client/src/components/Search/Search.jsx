import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterType,
  getPokemonName,
  getPokemons,
  getTypes,
} from "../../Redux/actions";
import style from "./Search.module.css";

const Search = () => {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [typess, setType] = useState("");
  useEffect(() => {
    dispatch(getTypes());
  }, []);

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

  const changeHandler2 = (event) => {
    setType(event.target.value);
  };

  const submitHandler2 = (event) => {
    event.preventDefault();
    dispatch(filterType(typess));
  };

  return (
    <div className={style.container}>
      <form onSubmit={submitHandler}>
        <input type="" value={name.toLocaleLowerCase()} onChange={changeHandler} />
        <button>Subir</button>
      </form>
      <form onSubmit={submitHandler2}>
        <input value={typess} onChange={changeHandler2}></input>
        <button>Type</button>
      </form>
      <form>
      <button onClick={clickHanlder}>Reset</button>
      </form>
    </div>
  );
};
export default Search;
