import style from "./NotFound.module.css";

import Notfound from "../../assets/NotFoundPokemon.png";

const NotFound = () => {
  return (
    <div className={style.mainContainer}>
      <img src={Notfound} alt="" />
      <p className={style.text}>Pokemon Not Found!</p>
    </div>
  );
};
export default NotFound;
