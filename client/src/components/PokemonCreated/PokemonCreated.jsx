import style from "./PokemonCreated.module.css";
import arceus from "../../assets/Arceus.png"


const PokemonCreated = (props) => {
  const { setPokemonCreated } = props;

  return (
    <div className={`${style.main} ${style.fadein}`}>
      <p>Pokemon Created Correctly!</p>
      <div className={style.containtbutton}>
        <button className={style.button} onClick={() => setPokemonCreated(false)}>X</button>
      </div>
      <div className={style.containimg}>
        <img src={arceus} alt="arceus" />
      </div>
    </div>
  );
};
export default PokemonCreated;
