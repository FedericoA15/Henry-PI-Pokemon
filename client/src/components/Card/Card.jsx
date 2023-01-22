import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.main}>
      <div className={style.info}>
        <p>{props.name}</p>
        <p>{props.type +``}</p>
      </div>
      <Link to={`/detail/${props.id}`}>
        <img src={props.img} alt={props.name} className={style.img}></img>
      </Link>
      <div className={style.info}></div>
      <p>{props.attack}</p>
    </div>
  );
};
export default Card;
