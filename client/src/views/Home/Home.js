import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Redux/actions";

import style from "../Home/Home.module.css";

import Search from "../../components/Search/Search";
import Loader from "../Loader/Loader";
import SearchType from "../../components/SearchType/SearchType";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(getPokemons());
    setTimeout(() => {
      setLoading(false);
  }, 2000);
  }, [dispatch]);
  // ya no renderizo cardcontoiner en home sino que pagination se dedica a generar las cartass
  return (
    <div className={style.main}>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.animation}>
          <SearchType />
          <Search />
          <Pagination />
        </div>
      )}
    </div>
  );
};
export default Home;
