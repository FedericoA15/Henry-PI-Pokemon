import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonId } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import style from "../Detail/Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, []);

  return (
    <div className={style.mainimage}>
      <div>
        <img className={style.image} src={pokemon.img} alt={pokemon.name}></img>
        <div className={style.nameandtype}>
          <p className={style.name}>{pokemon.name}</p>
          <p className={style.type}>{pokemon.type + ` `}</p>
        </div>
      </div>
      <div>
        <div className={style.conteinattackhp}>
          <p> Hp: {pokemon.hp}</p>
          <p> Attack: {pokemon.attack}</p>
        </div>
        <div className={style.info}>
          <p> Weight: {pokemon.weight}</p>
          <p> Defense: {pokemon.defense}</p>
          <p> Speed: {pokemon.speed}</p>
          <p> Height: {pokemon.height}</p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
