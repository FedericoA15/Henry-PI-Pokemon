import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Redux/actions";
import style from "../Home/Home.module.css";
import Search from "../../components/Search/Search";
import SearchType from "../../components/SearchType/SearchType";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
// ya no renderizo cardcontoiner en home sino que pagination se dedica a generar las cartass
  return (
    <div className={style.main}>
      <SearchType/>
      <Search />
      <Pagination/> 
    </div>
  );
};
export default Home;
