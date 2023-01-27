import style from "./Ice.module.css";

import ice from "../../../../assets/icons/ice.png";

const Ice = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={ice} alt="Ice" />
      </div>
      <h2>Ice</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Ice type Pokémon are those that can use ice-based attacks. They are known for their resistance to Ice type moves, they are strong against Grass, Ground, Flying and Dragon types, but weak against Fire, Fighting, Rock and Steel types. They typically have good special defense and speed. Some examples of Ice type Pokémon are Jynx, Glaceon and Articuno.
      </p>
    </div>
  );
};
export default Ice;