import { Header } from "../../components/Header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon } from "./PokemonListPageStyle";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";



export const PokemonListPage = () => {
  const context = useContext(GlobalContext)
  const {eachPokemon,myPokedex,detailPokemon} = context


  return (
    <>
      <Header
        homeFirstButtonDisplay="none"
        buttonTitle="Pokedex"
        background="#33A4F5"
        pokemon={detailPokemon}
      />
      <MainContainer>
        <Title>Todos os Pokémons</Title>
        <SectionPokemon>
          {eachPokemon
          .filter((pokemonList)=>{
            if(myPokedex.find((pokemonPokedex)=> pokemonList.id === pokemonPokedex.id)){
              return !pokemonList
            }else{
              return pokemonList
            }
          })
          .map((pokemon, index) => {
            // console.log("index", index);
            return (
              <PokemonCard
                buttonBackgroundColor="#fff"
                buttonColor="black"
                key={index}
                pokemon={pokemon}
                elementoType={pokemon.types}
              />
            );
          })}
        </SectionPokemon>
      </MainContainer>
      <Footer />
    </>
  );
};
