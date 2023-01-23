import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { validation } from "./validation.js";
import style from "../Form/Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    type: [],
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });
  const [error, setError] = useState({
    name: "",
    type: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const type = useSelector((state) => state.infoType);

  const changeHandler = (event) => {
    const property = event.target.name;
    let value = event.target.value;

    if (property === "name") value = value.toLocaleLowerCase();
    if (property === "type") value = value.split(",");

    setError(validation(property,value));
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/pokemons", form)
      .then((res) => alert("El pokemon fue creado correctamente"))
      .catch((err) => alert("Error! Revisa tus datos"));
  };



  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        ></input>
        {error.name && <p>{error.name}</p>}
      </div>
      <div>
        <label>Type: </label>
        <input
          type="text"
          value={form.type}
          onChange={changeHandler}
          name="type"
        ></input>
      </div>
      <div>
        <label>Health: </label>
        <input
          type="number"
          value={form.hp}
          onChange={changeHandler}
          name="hp"
        ></input>
        {error.hp && <p>{error.hp}</p>}
      </div>
      <div>
        <label>Attack: </label>
        <input
          type="number"
          value={form.attack}
          onChange={changeHandler}
          name="attack"
        ></input>
        {error.attack && <p>{error.attack}</p>}
      </div>
      <div>
        <label>Defense: </label>
        <input
          type="number"
          value={form.defense}
          onChange={changeHandler}
          name="defense"
        ></input>
        {error.defense && <p>{error.defense}</p>}
      </div>
      <div>
        <label>Speed: </label>
        <input
          type="number"
          value={form.speed}
          onChange={changeHandler}
          name="speed"
        ></input>
        {error.speed && <p>{error.speed}</p>}
      </div>
      <div>
        <label>Height: </label>
        <input
          type="number"
          value={form.height}
          onChange={changeHandler}
          name="height"
        ></input>
        {error.height && <p>{error.height}</p>}
      </div>
      <div>
        <label>Weight: </label>
        <input
          type="number"
          value={form.weight}
          onChange={changeHandler}
          name="weight"
        ></input>
        {error.weight && <p>{error.weight}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
