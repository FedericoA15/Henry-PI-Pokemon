import style from "./Flying.module.css";

import flying from "../../../../assets/icons/flying.png";

const Flying = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={flying} alt="Flying" />
      </div>
      <h2>Flying</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Flying type Pokémon are those that can fly or levitate, they are known for their immunity to Ground type moves and they are strong against Fighting, Bug, and Grass types, but weak against Rock, Electric and Ice type. They typically have high speed and good special defense. Some examples of Flying type Pokémon are Pidgey, Talonflame and Charizard.
      </p>
    </div>
  );
};
export default Flying;