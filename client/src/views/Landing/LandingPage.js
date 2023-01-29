import React from "react";
import { Link } from "react-router-dom";
import style from "../Landing/LandingPage.module.css";
import landing from "../../assets/Landing.png";

const Landing = () => {
  return (
    <div className={style.main}>
      <img className={style.image} src={landing} alt={landing}></img>
      <div className={`${style.boton}`}>
        <Link to="/home" className={`${style.unstyle} ${style.blink}`}>
          Go!
        </Link>
      </div>
    </div>
  );
};
export default Landing;
