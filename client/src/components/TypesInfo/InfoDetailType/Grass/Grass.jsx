import style from "./Grass.module.css";

import grass from "../../../../assets/icons/grass.png";

const Grass = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={grass} alt="Grass" />
      </div>
      <h2>Grass</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Grass type Pokémon are those that can use grass-based attacks. They are known for their resistance to Ground type moves and their weakness to Fire, Ice, Poison, Flying and Bug types. They are strong against Water, Rock and Ground types. They typically have good special defense and special attack. Some examples of Grass type Pokémon are Bulbasaur, Venusaur and Sceptile.
      </p>
    </div>
  );
};
export default Grass;