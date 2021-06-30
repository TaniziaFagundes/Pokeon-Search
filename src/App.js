import { useState } from "react";
import api from "./services/api";
import CardPokemon from "./components/CardPokemon";
import pokedex from "./assets/Rec.png";

import "./styled.js";
import { Container } from "./styled";

function App() {
  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState();
  const [typedPokemon, setTypedPokemon] = useState();
  const [isLoading, setIsLoading] = useState();

  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!typedPokemon) return;
    setIsLoading(true);
    try {
      const response = await api.get(`pokemon/${typedPokemon}`);
      setPokemon(response.data);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError("pokemon não encontrado!");
      setIsLoading(false);
      setPokemon(null);
    }
  };
  return (
    <Container>
      <h1>Procure seus Pokemons!!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={typedPokemon}
          placeholder="Nome do pokemon"
          onChange={handleChange}
        />
        <button type="submit">
          {isLoading ? <span>Carregando...</span> : <>Buscar</>}{" "}
          <img src={pokedex} alt="pokedex" />
        </button>
      </form>
      <CardPokemon pokemon={pokemon} isLoading={isLoading} error={error} />
    </Container>
  );
}

export default App;
