import style from "./Poison.module.css";

import poison from "../../../../assets/icons/poison.png";

const Poison = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={poison} alt="poison" />
      </div>
      <h2>Poison</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Poison type Pokémon are those that can use poison-based attacks, they are known for their resistance to Grass type moves and they are strong against Fairy and Grass types, but weak against Psychic and Ground types. They typically have good special defense and special attack. Some examples of Poison type Pokémon are Nidoking, Venusaur and Gengar.
      </p>
    </div>
  );
};
export default Poison;