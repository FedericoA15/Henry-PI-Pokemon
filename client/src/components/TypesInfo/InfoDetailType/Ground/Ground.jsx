import style from "./Ground.module.css";

import ground from "../../../../assets/icons/ground.png";

const Ground = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={ground} alt="ground" />
      </div>
      <h2>Ground</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Ground type Pokémon are those that can use earth-based attacks, they are known for their immunity to Electric type moves and their resistance to Poison and Rock type moves. They are strong against Electric, Fire, Poison, Rock, and Steel types, but weak against Water and Grass types. They typically have high defense and good offensive movepools. Some examples of Ground type Pokémon are Diglett, Golem, and Garchomp.
      </p>
    </div>
  );
};
export default Ground;