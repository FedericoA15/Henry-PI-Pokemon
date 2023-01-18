import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style.container}>
      <NavLink to="/">
        <div className={style.contimg}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/481px-Pokebola-pokeball-png-0.png"
            alt="pokebola"
            className={style.img}
          />
        </div>
      </NavLink>
      <div className={style.contilink}>
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/create">FORM</NavLink>
      </div>
    </div>
  );
};
export default NavBar;
