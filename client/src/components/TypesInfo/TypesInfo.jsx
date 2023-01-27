import Fighting from "./InfoDetailType/Fighting/Fighting";
import Normal from "./InfoDetailType/Normal/Normal";
import Flying from "./InfoDetailType/Flying/Flying";
import Poison from "./InfoDetailType/Poison/Poison";
import Ground from "./InfoDetailType/Ground/Ground";
import Rock from "./InfoDetailType/Rock/Rock";
import Bug from "./InfoDetailType/Bug/Bug";
import Ghost from "./InfoDetailType/Ghost/Ghost";
import Steel from "./InfoDetailType/Steel/Steel";
import Fire from "./InfoDetailType/Fire/Fire";
import Water from "./InfoDetailType/Water/Water";
import Grass from "./InfoDetailType/Grass/Grass";
import Electric from "./InfoDetailType/Electric/Electric";
import Psychic from "./InfoDetailType/Psychic/Psychic";
import Ice from "./InfoDetailType/Ice/Ice";
import Dragon from "./InfoDetailType/Dragon/Dragon";
import Dark from "./InfoDetailType/Dark/Dark";
import Fairy from "./InfoDetailType/Fairy/Fairy";
import Unknown from "./InfoDetailType/Unknown/Unknown";
import Shadow from "./InfoDetailType/Shadow/Shadow";

import style from "./TypesInfo.module.css";

const TypesInfo = () => {
  return (
    <div className={style.main}>
      <Normal></Normal>
      <Fighting></Fighting>
      <Flying></Flying>
      <Poison></Poison>
      <Ground></Ground>
      <Rock></Rock>
      <Bug></Bug>
      <Ghost></Ghost>
      <Steel></Steel>
      <Fire></Fire>
      <Water></Water>
      <Grass></Grass>
      <Electric></Electric>
      <Psychic></Psychic>
      <Ice></Ice>
      <Dragon></Dragon>
      <Dark></Dark>
      <Fairy></Fairy>
      <Unknown></Unknown>
      <Shadow></Shadow>
    </div>
  );
};
export default TypesInfo;
