import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"
const NavBar = () => {
    return(
        <div className={style.container}>
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/create">FORM</NavLink>
        </div>
    )
}
export default NavBar;