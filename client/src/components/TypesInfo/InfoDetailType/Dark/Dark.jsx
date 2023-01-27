import style from "./Dark.module.css";

import dark from "../../../../assets/icons/dark.png";

const Dark = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={dark} alt="Dark" />
      </div>
      <h2>Dark</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Dark type Pokémon are those that can use dark-based attacks. They are known for their resistance to Psychic type moves and their weakness to Fighting and Fairy type. They are strong against Psychic, Ghost and Dark types, but weak against Fighting, Fairy and Bug types. They typically have good special defense and speed. Some examples of Dark type Pokémon are Umbreon, Tyranitar and Houndoom.
      </p>
    </div>
  );
};
export default Dark;