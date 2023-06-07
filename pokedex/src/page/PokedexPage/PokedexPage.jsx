import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon } from "./PokedexPageStyle";

export const PokedexPage = () =>{
    return(
        <>
            <Header pokedexSecondButtonDisplay="none"  />
            <MainContainer>
                <Title>Meus Pokémons</Title>
                <SectionPokemon>
                    {/* Aqui será o map de myListThePokémons é dentro o <PokemonCard/>*/}
                    <PokemonCard buttonTitle="Excluir" buttonBackgroundColor="red" buttonColor="#fff" />
                </SectionPokemon>
            </MainContainer>
            <Footer/>
        </>

    )
}