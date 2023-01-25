import style from "./PokemonCreated.module.css";

const PokemonCreated = (props) => {
  const { setPokemonCreated } = props;

  return (
    <div className={`${style.main} ${style.fadein}`}>
      <p>¡Pokemon creado correctamente!</p>
      <div>
        <button onClick={() => setPokemonCreated(false)}>Cerrar</button>
      </div>
    </div>
  );
};
export default PokemonCreated;
