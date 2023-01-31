import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "./validation.js";
import { getTypes } from "../../Redux/actions.js";

import normal from "../../assets/icons/normal.png";
import fighting from "../../assets/icons/fighting.png";
import flying from "../../assets/icons/flying.png";
import poison from "../../assets/icons/poison.png";
import ground from "../../assets/icons/ground.png";
import rock from "../../assets/icons/rock.png";
import bug from "../../assets/icons/bug.png";
import ghost from "../../assets/icons/ghost.png";
import steel from "../../assets/icons/steel.png";
import fire from "../../assets/icons/fire.png";
import water from "../../assets/icons/water.png";
import grass from "../../assets/icons/grass.png";
import electric from "../../assets/icons/electric.png";
import psychic from "../../assets/icons/psychic.png";
import ice from "../../assets/icons/ice.png";
import dragon from "../../assets/icons/dragon.png";
import dark from "../../assets/icons/dark.png";
import fairy from "../../assets/icons/fairy.png";
import unknown from "../../assets/icons/unknown.png";
import shadow from "../../assets/icons/shadow.png";

import style from "../Form/Form.module.css";

import PokemonCreated from "../../components/PokemonCreated/PokemonCreated.jsx";
import PokemonError from "../../components/PokemonError/PokemonError.jsx";

const Form = () => {
  const [pokemonCreated, setPokemonCreated] = useState(false);
  const [pokemonError, setPokemonError] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    img: "",
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
    img: "",
    type: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });
  const types = useSelector((state) => state.infoType);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]); // toda esta parte es de estados tanto para susbcripsion de estado de redux de los types como el useEffect para poder hacerles render tambien estan todo los estados locales que uso para hacer condicionles de render

  // const handleTypeClick = (e, type) => {
  //   e.preventDefault();
  //   if (selectedTypes.length < 2) {
  //     setSelectedTypes([...selectedTypes, type]);
  //     setForm({ ...form, type: [...form.type, type] });
  //   } else {
  //     alert("Solo puedes seleccionar 2 tipos");
  //   }
  // };
  const handleTypeClick = (e, type) => {
    e.preventDefault();
    if (selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, type]);
      setForm({ ...form, type: [...form.type, type] });
    } else {
      selectedTypes[0] = selectedTypes[1];
      selectedTypes[1] = type;
      setSelectedTypes([...selectedTypes]);
      setForm({ ...form, type: [selectedTypes[0], selectedTypes[1]] });
    }
  };

  const changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    if (property === "name") value = value.toLocaleLowerCase(); // esta parte la hago asi para que cada vez que la propiedad que venga del form sea "name" la mande en minusculas pare evitar problemas con el backend y base de datos

    setError(validation(property, value)); // le mando property y value por separado a validation para poder hacer render condicionales  a los errores y asi no se actulicen todo los errores al escribir
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(!form.type.length){
      form.type.push("normal")
    }
    console.log(form);
    axios
      .post("http://localhost:3001/pokemons", form)
      .then((res) => {
        setPokemonCreated(true);
      })
      .catch((err) => {
        setPokemonError(true);
      });
  };

  const typeIcons = {
    normal: normal,
    fighting: fighting,
    flying: flying,
    poison: poison,
    ground: ground,
    rock: rock,
    bug: bug,
    ghost: ghost,
    steel: steel,
    fire: fire,
    water: water,
    grass: grass,
    electric: electric,
    psychic: psychic,
    ice: ice,
    dragon: dragon,
    dark: dark,
    fairy: fairy,
    unknown: unknown,
    shadow: shadow,
  }; // obj que sirve para indicar que imagen tiene que agarrar el type de pokemon

  return (
    <div className={style.animated}>
      {pokemonCreated && (
        <PokemonCreated setPokemonCreated={setPokemonCreated} />
      )}
      {pokemonError && <PokemonError setPokemonError={setPokemonError} />}
      <div
        className={`${style.types} ${
          pokemonCreated || pokemonError ? `${style.filter}` : ""
        }`}
      >
        {types.map((type) => {
          return (
            <button
              onClick={(e) => handleTypeClick(e, type.name)}
              key={type.id}
              className={style.optiones}
              value={type.name}
            >
              <img  className={style.ico} src={typeIcons[type.name]} alt={type.name} />
            </button>
          );
        })}
      </div>
      <form
        className={`${style.main} ${
          pokemonCreated || pokemonError ? `${style.filter}` : ""
        }`}
        onSubmit={submitHandler}
      >
        <div className={style.form}>
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
            <label>Imagen: </label>
            <input
              type="text"
              value={form.img}
              onChange={changeHandler}
              name="img"
            ></input>
            {error.img && <p>{error.img}</p>}
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
          <button className={style.button} type="submit">
            Submit
          </button>
        </div>
        <div className={style.createcard}>
          <p>Name: {form.name}</p>
          <div>
            <img className={style.icocard} src={typeIcons[form.type[0]]} alt={form.type[0]} />
            <img className={style.icocard} src={typeIcons[form.type[1]]} alt={form.type[1]} />
          </div>
          <img
            alt="pokemon"
            className={style.img}
            src={
              form.img
                ? form.img
                : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" //ternario que indica que si no existe form.img esta sera la imagen default del pokemon
            }
          ></img>
          <div className={style.info}>
            <p>Health: {form.hp}</p>
            <p>Attack: {form.attack}</p>
            <p>Defense: {form.defense}</p>
            <p>Speed: {form.speed}</p>
            <p>Height: {form.height}</p>
            <p>Weight: {form.weight}</p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;

//createdcard es un render del pokemon que se va a crear para asi mejorar la experiencia de uso
