import style from "./About.module.css";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const About = () => {
  return (
    <div className={style.main}>
      <p>
        Buenas, me presento, soy Federico Almeida. Este proyecto con temática
        Pokémon, lo cree para un proyecto individual de Soy Henry. Primero que
        nada, agradezco a la comunidad por ayudarme, dar consejos y por las
        oportunidades para seguir aprendiendo más cosas. Este proyecto cuenta
        con varias tecnologías, de las más importantes son:
      </p>
      <ul className={style.list}>
        <li>
          React{" "}
          <img
            className={style.icontec}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="React"
          />
        </li>
        <li>
          Redux{" "}
          <img
            className={style.icontec}
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            alt="Redux"
          />
        </li>
        <li>
          Express{" "}
          <img
            className={style.icontec}
            src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
            alt="Express"
          />
        </li>
        <li>
          Sequelize{" "}
          <img
            className={style.icontec}
            src="https://cdn.iconscout.com/icon/free/png-256/sequelize-2-1175003.png"
            alt="Sequelize"
          />
        </li>
        <li>
          Postgres{" "}
          <img
            className={style.icontec}
            src="https://user-images.githubusercontent.com/24623425/36042969-f87531d4-0d8a-11e8-9dee-e87ab8c6a9e3.png"
            alt="Postgres"
          />
        </li>
        <li>
          JavaScrip{" "}
          <img
            className={style.icontec}
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
            alt="JavaScrip"
          />
        </li>
        <li>
          Css{" "}
          <img
            className={style.icontec}
            src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
            alt="Css"
          />
        </li>
        <li>
          Html{" "}
          <img
            className={style.icontec}
            src="https://cdn-icons-png.flaticon.com/512/888/888859.png"
            alt="Html"
          />
        </li>
      </ul>
      <p>
        Un breve resumen de este proyecto sería que se basa en la posibilidad de
        buscar pokemones que existan, filtrar por lo que uno desee y también
        poder crear, modificar y eliminar pokemones.
      </p>
      <span>
        Muchas gracias por dar el tiempo de leer y ver, espero que lo disfruten
        como yo lo hice.
      </span>
      <div className={style.containicon}>
        <a
          href="https://www.linkedin.com/in/federico-jose-almeida/"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.icon} src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/FedericoA15"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.icon} src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};
export default About;
