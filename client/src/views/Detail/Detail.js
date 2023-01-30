import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedPokemon, getPokemonId } from "../../Redux/actions";
import { useParams } from "react-router-dom";

import style from "../Detail/Detail.module.css";

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
import EditPokemon from "../../components/EditPokemon/EditPokemon";
import Deletedpokemon from "../../components/DeletedPokemon/Deletedpokemon";
import Loader from "../Loader/Loader";

const Detail = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clean, setClean] = useState(false);
  const pokemon = useSelector((state) => state.pokemonDetail);
  const { id } = useParams();

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

  const handleDelete = () => {
    dispatch(deletedPokemon(id));
    setClean(true);
  };

  const activeEdit = () => {
    setEdit(true);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(getPokemonId(id));
      setLoading(false);
    };
    getData();
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.mainimage}>
        <div>
          <img
            className={style.image}
            src={pokemon.img}
            alt={pokemon.name}
          ></img>
          <div className={style.nameandtype}>
            <p className={style.name}>{pokemon.name}</p>
            {pokemon.type?.map((t) => (
              <img className={style.icon} src={typeIcons[t]} alt={t} key={t} />
            ))}
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
        <div className={style.containtbutton}>
          {typeof pokemon.id === "string" && (
            <button onClick={handleDelete} className={style.btn}>
              <p className={style.paragraph}> delete </p>
              <span className={style.iconwrapper}>
                <svg
                  class="icon"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          )}
          {typeof pokemon.id === "string" && (
            <button onClick={activeEdit} className={style.editbtn}>
              Edit
            </button>
          )}
        </div>
      {clean && <Deletedpokemon setClean={setClean} />}
      {edit && <EditPokemon setEdit={setEdit} id={id} img={pokemon.img} />}
    </div>
      )}
    </div>
  );
};
export default Detail;
