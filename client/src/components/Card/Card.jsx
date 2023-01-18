import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.main}>
      <div className={style.info}>
        <p>{props.name}</p>
        <p>{props.type}</p>
      </div>
      <img src={props.img} alt={props.name} className={style.img}></img>
      <div className={style.info}>
        <p>hp:{props.health}</p>
        <p>attack:{props.attack}</p>
        <p>defense:{props.defense}</p>
      </div>
    </div>
  );
};
export default Card;
