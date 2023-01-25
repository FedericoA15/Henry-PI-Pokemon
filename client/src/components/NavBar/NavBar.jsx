import React from "react";
import { NavLink } from "react-router-dom";
import pokebola from "../../assets/pokebola.png"
import logo from "../../assets/logoPokemon.png"
import FilterAndOrder from "../FilterAndOrder/FilterAndOder";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style.container}>
      <div>
        <img className={style.logo} src={logo} alt="logo" />
      </div>
      <NavLink to="/">
        <div className={style.contimg}>
          <img
            src={pokebola}
            alt="pokebola"
            className={style.img}
          />
        </div>
      </NavLink>
      <div className={style.contilink}>
        <FilterAndOrder/>
        <div className={style.navlink}>
        <NavLink className={style.button} to="/home">
          Home
        </NavLink>
        <NavLink className={style.button} to="/create">
          Create
        </NavLink>
        <NavLink className={style.button} to="/types">
          Types
        </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
