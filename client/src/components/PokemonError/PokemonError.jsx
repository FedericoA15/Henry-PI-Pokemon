import style from "./PokemonError.module.css";
import yletal from "../../assets/yletal.png"

const PokemonError = (props) => {
  const { setPokemonError } = props;

  return (
    <div className={`${style.main} ${style.fadein}`}>
      <p>Check your data there is an error!</p>
      <div className={style.containtbutton}>
        <button className={style.button} onClick={() => setPokemonError(false)}>X</button>
      </div>
      <div className={style.containimg}>
        <img src={yletal} alt="yletal" />
      </div>
    </div>
  );
};
export default PokemonError;
