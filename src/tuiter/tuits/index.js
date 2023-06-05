import React from "react";
//import tuits from './tuits.json';
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const {tuits} = useSelector(state => state.tuits)
  return (
      <ul className="list-group"> {
        tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
      } </ul>
  );
};
export default TuitsList;