import { Container, Content, ContentImg, Error } from "./styled";
import NotFound from "../../assets/found.svg";
const Pokemon = ({ pokemon, isLoading, error }) => {
  return (
    <Container>
      {pokemon && (
        <Content key={pokemon.id}>
          {isLoading ? (
            ""
          ) : (
            <>
              <ContentImg>
                <h2>{pokemon.name}</h2>
                <img
                  src={pokemon.sprites["front_default"]}
                  alt={pokemon.name}
                />
              </ContentImg>
              <Content>
                <span>
                  <strong>Height</strong>: {pokemon.height * 10} cm
                </span>
                <span>
                  <strong>Weight</strong>: {pokemon.weight / 10} kg
                </span>
                <span>
                  <strong>Type</strong>: {pokemon.types[0].type.name} cm
                </span>
                <span>
                  <strong>id</strong>: {pokemon.id}
                </span>
              </Content>
            </>
          )}
        </Content>
      )}
      <Error>
        {error ? (
          <>
            <img src={NotFound} alt="não encontrado" />
            <p>Não encontrado!</p>
          </>
        ) : (
          ""
        )}
      </Error>
    </Container>
  );
};

export default Pokemon;
