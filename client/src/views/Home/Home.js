import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../Redux/actions';
import style from "../Home/Home.module.css"
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Search from '../../components/Search/Search';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons())
    },[])

    return(
        <div className={style.main}>
            <CardsContainer/>
        </div>
    )
}
export default Home;