import style from "./Dragon.module.css";

import dragon from "../../../../assets/icons/dragon.png";

const Dragon = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={dragon} alt="dragon" />
      </div>
      <h2>Dragon</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Dragon type Pokémon are those that can use dragon-based attacks. They are known for their resistance to Dragon type moves and their weakness to Fairy and Dragon type. They are strong against Dragon, Fairy, Ice and Fire types, but weak against Dragon, Fairy and Ice types. They typically have good special attack and good defense. Some examples of Dragon type Pokémon are Dragonite, Garchomp and Rayquaza.
      </p>
    </div>
  );
};
export default Dragon;