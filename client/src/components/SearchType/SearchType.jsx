import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterType, filterTypeTwo, getTypes } from "../../Redux/actions";

import style from "./SearchType.module.css";

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

const SearchType = () => {
  const types = useSelector((state) => state.infoType);
  const dispatch = useDispatch();
  const [firstType, setFirstType] = useState(""); // agua
  const [secondType, setSecondType] = useState(""); // fuego
  const [selectedTypes, setSelectedTypes] = useState([]);

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
  };
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleTypeSelection = (type) => {
    if (!firstType) {
      setFirstType(type);
      //Si el estado firstType está vacío, significa que es la primera vez que se está seleccionando un tipo, entonces se actualiza el estado firstType con el tipo seleccionado.
    } else if (!secondType) {
      //Si el estado secondType está vacío, significa que ya se ha seleccionado un tipo y se está seleccionando un segundo tipo, entonces se actualiza el estado secondType con el tipo seleccionado.
      setSecondType(type); // agua
    } else {
      setFirstType(secondType); // Si ambos estados firstType y secondType ya tienen un valor, significa que se está seleccionando un tercer tipo, entonces se actualiza el estado firstType con el valor actual del estado secondType y se actualiza el estado secondType con el tipo seleccionado.
      setSecondType(type); // veneno
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!secondType) {
      dispatch(filterType(firstType));
      setSelectedTypes([firstType]);
    } else {
      dispatch(filterTypeTwo(firstType, secondType));
      setSelectedTypes([firstType, secondType]);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler} className={style.main}>
        {types.map((type) => {
          const selected = selectedTypes.includes(type.name);
          return (
            <button
              key={type.id}
              className={style.button}
              value={type.name}
              onClick={() => handleTypeSelection(type.name)}
            >
              <img
                className={`${style.icon} ${selected ? style.selected : ""}`}
                src={typeIcons[type.name]}
                alt={type.name}
              />
              <p>{type.name}</p>
            </button>
          );
          //Dentro de la función handleTypeSelection, se están actualizando los estados firstType y secondType con los valores correspondientes, lo cual permite realizar la búsqueda con los dos tipos seleccionados.
        })}
      </form>
    </div>
  );
};
export default SearchType;
