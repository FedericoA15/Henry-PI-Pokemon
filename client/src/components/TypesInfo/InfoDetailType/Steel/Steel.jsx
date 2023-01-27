import style from "./Steel.module.css";

import steel from "../../../../assets/icons/steel.png";

const Steel = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={steel} alt="Fighting" />
      </div>
      <h2>Steel</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Steel type Pokémon are those that can use steel-based attacks, they are known for their resistance to Poison and Psychic type moves and their immunity to move Toxic. They are strong against Ice, Rock, Fairy and Bug types, but weak against Fire, Fighting and Ground types. They typically have high defense and special defense. Some examples of Steel type Pokémon are Metagross, Aggron, and Mawile.
      </p>
    </div>
  );
};
export default Steel;