import { Header } from "../../components/Header/Header"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Footer } from "../../components/Footer/Footer";

export const PokemonDetailPage = () =>{
    return(
        <>
            <Header/>
            <main>
                <h1>Detalhes</h1>
                <section>
                    {/* I dont know! */}
                    <PokemonCard/>
                </section>
            </main>
        </>
    )
}