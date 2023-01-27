import style from "./Water.module.css";

import water from "../../../../assets/icons/water.png";

const Water = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={water} alt="Water" />
      </div>
      <h2>Water</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Water type Pokémon are those that can use water-based attacks. They are known for their resistance to Fire and Ice type moves, they are strong against Fire, Ground and Rock types, but weak against Electric and Grass types. They typically have good special attack and defense. Some examples of Water type Pokémon are Squirtle, Blastoise and Gyarados.
      </p>
    </div>
  );
};
export default Water;