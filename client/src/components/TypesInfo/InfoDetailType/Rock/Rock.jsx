import style from "./Rock.module.css";

import rock from "../../../../assets/icons/rock.png";

const Rock = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={rock} alt="rock" />
      </div>
      <h2>Rock</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Rock type Pokémon are those that can use rock-based attacks, they are known for their resistance to Fire and Flying type moves. They are strong against Fire, Ice, Flying and Bug types, but weak against Fighting, Ground, Steel, Water and Grass types. They typically have high defense and good offensive movepools. Some examples of Rock type Pokémon are Geodude, Onix, and Tyranitar.
      </p>
    </div>
  );
};
export default Rock;