import style from "./Fairy.module.css";

import fairy from "../../../../assets/icons/fairy.png";

const Fairy = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={fairy} alt="Fairy" />
      </div>
      <h2>Fairy</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Fairy type Pokémon are those that can use fairy-based attacks. They were introduced in Generation VI. They are known for their resistance to Dragon and Fighting type moves and their weakness to Steel and Poison types. They are strong against Fighting, Dragon and Dark types, but weak against Steel and Poison types. They typically have good special defense and special attack. Some examples of Fairy type Pokémon are Clefable, Togekiss, and Sylveon.
      </p>
    </div>
  );
};
export default Fairy;