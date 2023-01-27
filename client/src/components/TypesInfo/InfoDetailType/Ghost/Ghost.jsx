import style from "./Ghost.module.css";

import ghost from "../../../../assets/icons/ghost.png";

const Ghost = () => {
  return (
    <div className={style.main}>
      <div className={style.containimg}>
        <img className={style.imagen} src={ghost} alt="ghost" />
      </div>
      <h2>Ghost</h2>
      <p className={style.pruebA}>
      In the Pokémon universe, Ghost type Pokémon are those that are able to use ghost-based attacks, they are known for their immunity to Normal and Fighting type moves and resistance to Poison type moves. They are strong against Psychic and Ghost types, but weak against Dark and Ghost types. They typically have good special attack and special defense. Some examples of Ghost type Pokémon are Gengar, Sableye, and Drifblim.
      </p>
    </div>
  );
};
export default Ghost;