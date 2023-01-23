import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByApi,
  filterByDb,
  sortByAttack,
  sortByName,
} from "../../Redux/actions";
import style from "../FilterAndOrder/FilterAndOrder.module.css";

const FilterAndOrder = () => {
  const dispatch = useDispatch();
  const clickHanlderDb = () => {
    dispatch(filterByDb());
  };
  const clickHanlderApi = () => {
    dispatch(filterByApi());
  };
  const clickHandlerAttack = (e) => {
    dispatch(sortByAttack(e.target.value));
  };
  const clickHandlerName = (e) => {
    dispatch(sortByName(e.target.value))
  }

  return (
    <div className={style.container}>
      <button onClick={clickHanlderApi}>Filter Api</button>
      <button onClick={clickHanlderDb}>Filter Create</button>
      <button value="desc" onClick={clickHandlerAttack}>
        -ATCK
      </button>
      <button value="asc" onClick={clickHandlerAttack}>
        +ATCK
      </button>
      <button value="asc" onClick={clickHandlerName}>A-Z</button>
      <button value="desc" onClick={clickHandlerName}>Z-A</button>
    </div>
  );
};
export default FilterAndOrder;