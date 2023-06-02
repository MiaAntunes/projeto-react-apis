import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";

export const PokemonPage = () =>{
    return(
        <>
            <Header/>
            <main>
                <h1>Meus Pokémons</h1>
                <section>
                    {/* Aqui será o map de myListThePokémons é dentro o <PokemonCard/>*/}
                    <PokemonCard/>
                </section>
            </main>
            <Footer/>
        </>

    )
}