import style from "./Electric.module.css";

import electric from "../../../../assets/icons/electric.png";

const Electric = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={electric} alt="electric" />
      </div>
      <h2>Fighting</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Electric type Pokémon are those that can use electric-based attacks. They are known for their immunity to Ground type moves and their weakness to Ground type. They are strong against Water and Flying types, but weak against Grass and Electric types. They typically have high speed and special attack. Some examples of Electric type Pokémon are Pikachu, Jolteon and Raikou.
      </p>
    </div>
  );
};
export default Electric;