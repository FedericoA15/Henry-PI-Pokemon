import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./CardsContainer.module.css"

const CardsContainer = () => {
    const pokemons = useSelector(state=>state.pokemonFilter) // este hook nos permite traer el estado directamente desde redux sin tener que hacer un mapStateToProps

    return (
        <div className={style.main}>
            {pokemons.map(pokemon=>{
                return <Card
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
            })}
        </div>
    )

}
export default CardsContainer