import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = (props) => {
  return (
    <div className={style.main}>
      {props.poke.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            type={pokemon.type}
            health={pokemon.health}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
