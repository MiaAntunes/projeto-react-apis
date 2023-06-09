import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon } from "./PokemonListPageStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { usePokedex } from "../../hooks/usePokedex";
import { useNavigate } from "react-router-dom";
import { goToDetailPokemon } from "../../router/coordinator";

export const PokemonListPage = () => {
  const navigate = useNavigate();
  const [eachPokemon, setEachPokemon] = useRequestData([]);
  // ! Esse é para exemplo!!!
  const [myPokedex, setMyPokedex] = usePokedex([]);
  // ! Falta esconder o todos os pokemons quando tiver nessa página
  // ! Como eu coloco cada elemento no card?

  const catchPokemon = (element) => {
    const findPokemonRepeat = myPokedex.find((pokemon) => pokemon === element);
    //  console.log("Find", findPokemonRepeat)

    if (findPokemonRepeat) {
      alert("O pokemon foi adicionado a sua pokedex!");
    } else {
      if (myPokedex.length > 0) {
        const updateInPokedex = [...myPokedex, element];
        setMyPokedex(updateInPokedex);
      } else {
        const updateInPokedex = [element];
        setMyPokedex(updateInPokedex);
      }
    }

    // ! Por que isso aqui não pega ?
    const retirePokemon = eachPokemon.filter((pokemon) => {
       console.log(pokemon.id, element.id)
       return pokemon.id !== element.id
    });
    console.log("RETIRE POKEMON", retirePokemon)
    setEachPokemon(retirePokemon);

  };
//   console.log("Capturado", myPokedex);
//   console.log("Retirado", eachPokemon);

  const detailPokemon = (element) => {
    // ! Falta muita coisa
    console.log("Detail", element.name);
    goToDetailPokemon(navigate, element.name);
  };

  return (
    <>
      <Header
        homeFirstButtonDisplay="none"
        buttonTitle="Pokedex"
        background="#33A4F5"
      />
      <MainContainer>
        <Title>Todos os Pokémons</Title>
        <SectionPokemon>
          {eachPokemon.map((pokemon, index) => {
            const elementoType = pokemon.types.map((type) => {
              return type;
            });
            // console.log("ElementoType", elementoType)
            // console.log("Detalhes de cada pokemon", pokemon);
            // console.log("index", index);
            return (
              <PokemonCard
                buttonTitle="Capturar"
                buttonBackgroundColor="#fff"
                buttonColor="black"
                key={index}
                pokemon={pokemon}
                elementoType={elementoType}
                catchPokemon={catchPokemon}
                detailPokemon={detailPokemon}
              />
            );
          })}
        </SectionPokemon>
      </MainContainer>
      <Footer />
    </>
  );
};
