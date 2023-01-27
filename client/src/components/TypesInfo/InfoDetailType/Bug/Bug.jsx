import style from "./Bug.module.css";

import bug from "../../../../assets/icons/bug.png";

const Bug = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={bug} alt="bug" />
      </div>
      <h2>Bug</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Bug type Pokémon are those that can use bug-based attacks, they are known for their resistance to Fighting and Grass type moves. They are strong against Grass, Psychic and Dark types, but weak against Fire, Flying, Rock and Poison types. They typically have good speed and special defense. Some examples of Bug type Pokémon are Caterpie, Butterfree, and Heracross.
      </p>
    </div>
  );
};
export default Bug;