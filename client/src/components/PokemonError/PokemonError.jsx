import style from "./PokemonError.module.css";

const PokemonError = (props) => {
  const { setPokemonError } = props;

  return (
    <div className={`${style.main} ${style.fadein}`}>
      <p>¡Revisa tus datos hay un error!</p>
      <div>
        <button onClick={() => setPokemonError(false)}>Cerrar</button>
      </div>
    </div>
  );
};
export default PokemonError;
