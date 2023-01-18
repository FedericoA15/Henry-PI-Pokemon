import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../Redux/actions';
import style from "../Home/Home.module.css"
import CardsContainer from '../../components/CardsContainer/CardsContainer';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons())
    },[])

    return(
        <div className={style.main}>
            <h1>Estas en Home</h1>
            <CardsContainer>

            </CardsContainer>
        </div>
    )
}
export default Home;