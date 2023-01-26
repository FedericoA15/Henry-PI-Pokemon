import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

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

const Card = (props) => {
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
  return (
    <div className={style.main}>
      <div className={style.info}>
        <p>{props.name}</p>
        {props.type.map(t => (
          <img 
            className={style.icon} 
            src={typeIcons[t]} 
            alt={t} 
            key={t} 
          />
        ))}
      </div>
      <Link to={`/detail/${props.id}`}>
        <img src={props.img} alt={props.name} className={style.img}></img>
      </Link>
      <div className={style.info}></div>
    </div>
  );
};
export default Card;
