import axios from "axios";
import React, { useState } from "react";
import style from "../Form/Form.module.css";

// falta validacion por front
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    type: [],
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });
  const [error, setError] = useState({
    name: "",
    type: [],
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });
  function validation(inputs) {
    if (!inputs.name) error.name = "Error";
    // if (inputs.type) error.type = "La contraseña es muy corta";
    // if (inputs.type) error.type = "La contraseña es muy larga";
    // if (inputs.health) error.health = "Error";
    // if (inputs.health) error.health = "Error";
    // if (inputs.attack) error.attack = "Error";
    // if (inputs.attack) error.attack = "Error";
    // if (inputs.defense) error.defense = "Error";
    // if (inputs.defense) error.defense = "Error";
    // if (inputs.height) error.height = "Error";
    // if (inputs.height) error.height = "Error";
    // if (inputs.weight) error.weight = "Error";
    // if (inputs.weight) error.weight = "Error";
  }

const changeHandler = (event) => {
  const property = event.target.name;
  let value = event.target.value;
  if (property === "type") value = value.split(",");
  setForm({ ...form, [property]: value });
  setError(validation({...form, [property]: value}));
};

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/pokemons", form)
      .then((res) => alert("El pokemon fue creado correctamente"))
      .catch((err) => alert("Error! Revisa tus datos"));
    console.log(form);
  };

  return (
    <form onSubmit={submitHandler} className={style.main}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={form.name.toLocaleLowerCase()}
          onChange={changeHandler}
          name="name"
        ></input>
        <p>{error.name}</p>
      </div>
      <div>
        <label>Type</label>
        <input
          type="text"
          value={form.type}
          onChange={changeHandler}
          name="type"
        ></input>
      </div>
      <div>
        <label>Health</label>
        <input
          type="text"
          value={form.health}
          onChange={changeHandler}
          name="health"
        ></input>
        <p>{error.health}</p>
      </div>
      <div>
        <label>Attack</label>
        <input
          type="number"
          value={form.attack}
          onChange={changeHandler}
          name="attack"
        ></input>
        <p>{error.attack}</p>
      </div>

      <div>
        <label>Defense</label>
        <input
          type="number"
          value={form.defense}
          onChange={changeHandler}
          name="defense"
        ></input>
        <p>{error.defense}</p>
      </div>
      <div>
        <label>Speed</label>
        <input
          type="number"
          value={form.speed}
          onChange={changeHandler}
          name="speed"
        ></input>
        <p>{error.speed}</p>
      </div>
      <div>
        <label>Height</label>
        <input
          type="number"
          value={form.height}
          onChange={changeHandler}
          name="height"
        ></input>
        <p>{error.height}</p>
      </div>
      <div>
        <label>Weight</label>
        <input
          type="number"
          value={form.weight}
          onChange={changeHandler}
          name="weight"
        ></input>
        <p>{error.weight}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
