import React from 'react';
import { Link } from 'react-router-dom';
import style from "../Landing/LandingPage.module.css"

const Landing = () => {

    return(
        <div className={style.main}>
            <h1>Welcome!</h1>
            <Link to="/home"><button>Go!</button></Link>
        </div>
        
    )
}
export default Landing;