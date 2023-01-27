import style from "./Unknown.module.css";

import unknown from "../../../../assets/icons/unknown.png";

const Unknown = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={unknown} alt="unknown" />
      </div>
      <h2>Unknown</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, the Unknown type also known as "???" type, is not a valid type in the main series games and it is not associated with any specific Pokémon. Some fan theories suggest that it could be a hypothetical type that would be super effective against all other types, but it is not officially recognized by the series. It is not a real type in the game, it is just a placeholder for unknown data or bugs in the game.
      </p>
    </div>
  );
};
export default Unknown;