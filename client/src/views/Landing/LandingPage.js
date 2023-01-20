import React from 'react';
import { Link } from 'react-router-dom';
import style from "../Landing/LandingPage.module.css"

const Landing = () => {

    return(
        <div className={style.main}>
            <img src='https://cdn-icons-png.flaticon.com/512/528/528101.png'></img>
            <div className={style.boton}>
                <Link to="/home" className={style.unstyle}>Go!</Link>
            </div>
        </div>
        
    )
}
export default Landing;