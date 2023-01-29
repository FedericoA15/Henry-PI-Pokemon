import { useState } from "react";
import { useSelector } from "react-redux";
import CardsContainer from "../CardsContainer/CardsContainer";
import NotFound from "../NotFound/NotFound";
import style from "./Pagination.module.css";

const Pagination = () => {
  const allPokemons = useSelector((state) => state.pokemonFilter);
  const [page, setPage] = useState(1);
  const amount = 12;
  const totalpages = Math.ceil(allPokemons.length / amount);

  const paginatedPokemon = allPokemons.slice(
    (page - 1) * amount,
    page * amount
  );

  const handleClick = (event) => {
    setPage(event.target.value);
  };

  const buttonI = [];
  for (let i = 1; i <= totalpages; i++) {
    buttonI.push(i);
  }

  return (
    <div>
      {allPokemons.length === 0 ? (
        <NotFound></NotFound>
      ) : (
        <div>
          <div className={style.main}>
            {buttonI.map((i) => (
              <button
                className={`${style.button} ${i === parseInt(page) ? style.selected : ""}`}
                key={i}
                value={i}
                onClick={handleClick}
              >
                {i}
              </button>
            ))}
          </div>
          <div>
            <CardsContainer poke={paginatedPokemon}></CardsContainer>
          </div>
        </div>
      )}
    </div>
  );
};
export default Pagination;
