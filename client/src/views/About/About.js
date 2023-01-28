import style from "./About.module.css";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const About = () => {
  return (
    <div>
      <div className={style.main}>
      <p>
        Buenas me presento soy Federico Almeida, este proyecto con tematica
        pokemon, lo cree para proyecto individual de Soy Henry, primero que nada
        agradezco a la comunidad por ayudarme, dar consejos y por las
        oportunidades para seguir aprendiendo mas cosas. Este proyecto cuenta
        con varias tecnologias usadas de las mas importantes son:
      </p>
      <ul className={style.list}>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>Postgres</li>
        <li>JavaScrip</li>
        <li>Css</li>
        <li>Html</li>
      </ul>
      <p>
        Un brebe resumen de este proyecoto seria que se basa en la la
        posibilidad de podes buscar pokemons que existan, filtrar por lo que uno
        desee y tambien poder crear, modificar y eliminar pokemons.
      </p>
      <span>
        Muchas gracias por dar el tiempo de leer y ver, espero que lo disfruten como yo lo hice.
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
    </div>
  );
};
export default About;
