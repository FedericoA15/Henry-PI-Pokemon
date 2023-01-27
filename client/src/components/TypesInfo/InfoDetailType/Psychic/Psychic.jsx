import style from "./Psychic.module.css";

import psychic from "../../../../assets/icons/psychic.png";

const Psychic = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={psychic} alt="psychic" />
      </div>
      <h2>Psychic</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Psychic type Pokémon are those that can use psychic-based attacks. They are known for their resistance to Fighting and Poison type moves, they are strong against Fighting, Poison and other Psychic types, but weak against Bug, Ghost and Dark types. They typically have good special attack and special defense. Some examples of Psychic type Pokémon are Mew, Alakazam and Espeon.
      </p>
    </div>
  );
};
export default Psychic;