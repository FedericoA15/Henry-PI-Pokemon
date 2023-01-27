import style from "./Fire.module.css";

import fire from "../../../../assets/icons/fire.png";

const Fire = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={fire} alt="Fire" />
      </div>
      <h2>Fire</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Fire type Pokémon are those that can use fire-based attacks. They are known for their resistance to Bug and Steel type moves, they are strong against Grass, Ice, Bug and Steel types, but weak against Water, Rock and Ground types. They typically have good special attack and speed. Some examples of Fire type Pokémon are Charmander, Charizard and Infernape.
      </p>
    </div>
  );
};
export default Fire;