import { useHistory } from "react-router-dom";
import style from "./Deletedpokemon.module.css";

const Deletedpokemon = (props) => {
  const { setClean } = props;
  const history = useHistory();

  const clickHandler = () => {
    setClean(false);
    history.goBack("/home");
  };

  return (
    <div className={style.main}>
      <p>The Pokémon was deleted successfully :(</p>
      <div>
      <button className={style.button}  onClick={clickHandler}>x</button>
      </div>
    </div>
  );
};
export default Deletedpokemon;
