import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon, FirstContainer, SecondContainer, ThirstContainer, FourthContainer, ImagePokemon } from "./PokemonDetailStyle";
import teste1 from "../../assets/teste.png"
import teste2 from "../../assets/teste2.png"
import teste3 from "../../assets/teste3.png"
import teste5 from "../../assets/teste5.png"


export const PokemonDetailPage = () => {
  return (
    <>
      <Header buttonTitle="Excluir" background="red" />
      <MainContainer>
        <Title>Detalhes</Title>
        <SectionPokemon>
            <FirstContainer>
              <img src={teste2} alt="" />
              <img src={teste3} alt="" />
            </FirstContainer>
            <SecondContainer>
              <img src={teste5} alt="" />
            </SecondContainer>
            <ThirstContainer>
                <p>#01</p>
                <h2>Bulbasaur</h2>
                <span>Lógica</span>
                <div>
                    <h3>Moves: </h3>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </ThirstContainer>
            <FourthContainer>
                <ImagePokemon src={teste1} alt="" />
            </FourthContainer>
        </SectionPokemon>
      </MainContainer>
    </>
  );
};
