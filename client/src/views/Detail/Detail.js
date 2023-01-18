import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonId } from '../../Redux/actions';
import { useParams } from "react-router-dom"

const Detail = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector((state)=> state.pokemon)
    const { id } = useParams()

    useEffect(()=>{
        dispatch(getPokemonId(id))
    },[])
    

    return(
        <div>
            <h1>
                estas en Detail
            </h1>
            <div>
                <p> id: {pokemon.id}</p>
                <p> name: {pokemon.name}</p>
                <p> type: {pokemon.type}</p>
                <img src={pokemon.img} alt={pokemon.name}></img>
                <p> hp: {pokemon.hp}</p>
                <p> attack: {pokemon.attack}</p>
                <p> defense: {pokemon.defense}</p>
                <p> speed: {pokemon.speed}</p>
                <p> height: {pokemon.height}</p>
                <p> weight: {pokemon.weight}</p>
            </div>
        </div>
    )
}
export default Detail;