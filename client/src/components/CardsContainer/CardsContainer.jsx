import React from "react";
import Card from "../Card/Card";

const CardsContainer = () => {
    const pokemons = [
        {
            "id": 1,
            "name": "bulbasaur",
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            "type": [
                "grass",
                "poison"
            ],
            "health": 45,
            "attack": 49,
            "defense": 49,
            "speed": 45,
            "height": 7,
            "weight": 69
        },
        {
            "id": 2,
            "name": "ivysaur",
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            "type": [
                "grass",
                "poison"
            ],
            "health": 60,
            "attack": 62,
            "defense": 63,
            "speed": 60,
            "height": 10,
            "weight": 130
        },
        {
            "id": "1604a0a3-4bef-4a6e-a75d-570d26ee7522",
            "name": "bolas",
            "img": "fotobolas",
            "type": [
                "normal",
                "dark",
                "flying"
            ],
            "health": 5,
            "attack": 10,
            "defense": 45,
            "speed": 10,
            "height": 15,
            "weight": 12,
            "createdAt": "2023-01-17T04:29:38.093Z",
            "updatedAt": "2023-01-17T04:29:38.093Z"
        }
    ]
    return (
        <div>
            {pokemons.map(pokemon=>{
                return <Card
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