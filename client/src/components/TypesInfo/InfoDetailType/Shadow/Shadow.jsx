import style from "./Shadow.module.css";

import shadow from "../../../../assets/icons/shadow.png";

const Shadow = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={shadow} alt="Shadow" />
      </div>
      <h2>Shadow</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Shadow type is not an official type in the main series games, it is a fan-made type created by some fans and it is not recognized by the official games. Some fan theories suggest that it could be a hypothetical type that would be super effective against all other types, or it could be a type that would be immune to all status conditions like confusion or sleep, but it is not officially recognized by the series. It is important to note that the official Pokemon games have only 18 types.
      </p>
    </div>
  );
};
export default Shadow;