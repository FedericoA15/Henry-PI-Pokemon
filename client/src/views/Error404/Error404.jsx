import style from "./Error404.module.css";
import pokebola404 from "../../assets/404.png"
import pokemon404 from "../../assets/pokemon404.png"


const Error404 = () => {
    return (
        <div>
          <h1 className={style.string}>ERROR 4{<img className={style.img} src={pokebola404} alt="pokebola"/>}4</h1>
          <div>
            <img src={pokemon404} alt="pokemon404" />
          </div>
        </div>
  );
};
export default Error404;
