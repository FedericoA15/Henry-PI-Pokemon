import style from "./Fighting.module.css";

import fighting from "../../../../assets/icons/fighting.png";

const Fighting = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={fighting} alt="Fighting" />
      </div>
      <h2>Fighting</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Fighting type Pokémon are those that have the ability to use physical attacks and are strong against Normal, Ice, Rock, Steel and Dark types, but weak against Flying, Psychic, Fairy type. They are known for their high attack stat and good offensive movepools. Some examples of Fighting type Pokémon are Machop, Heracross and Lucario.
      </p>
    </div>
  );
};
export default Fighting;