import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TypesInfo from "../../components/TypesInfo/TypesInfo";
import { getTypes } from "../../Redux/actions";

const Types = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <div>
      <TypesInfo />
    </div>
  );
};
export default Types;