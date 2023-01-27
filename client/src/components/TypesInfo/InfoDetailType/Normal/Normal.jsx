import style from "./Normal.module.css";

import normal from "../../../../assets/icons/normal.png";

const Normal = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={normal} alt="normal" />
      </div>
      <h2>Normal</h2>
      <p className={style.pruebA}>
        In the Pokémon universe, Normal type Pokémon are those that do not have
        a specific elemental type, such as fire, water, electricity, etc. They
        are considered "normal" because they do not have a special weakness or
        resistance against other types. In general, Normal type Pokémon are
        versatile in battle and have a wide variety of abilities and moves. Some
        examples of Normal type Pokémon are Ratatta, Pidgey, and Jigglypuff.
      </p>
    </div>
  );
};
export default Normal;
