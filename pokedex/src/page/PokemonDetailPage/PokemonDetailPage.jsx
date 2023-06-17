import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MainContainer, Title, SectionPokemon, FirstContainer, SecondContainer, ThirstContainer, FourthContainer, ImagePokemon } from "./PokemonDetailStyle";
import teste1 from "../../assets/teste.png"
import teste2 from "../../assets/teste2.png"
import teste3 from "../../assets/teste3.png"
import teste5 from "../../assets/teste5.png"
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { imageElementPokemon } from "../../utils/imageElementPokemon";


export const PokemonDetailPage = (props) => {
  const context = useContext(GlobalContext)
  const {detailPokemon} = context

  const elementPokemon = detailPokemon.types.map((type, index)=>{
    return <img key={index} src={imageElementPokemon(type.type.name)} alt={type.name} />
 })
  
  return (
    <>
      <Header pokemon={detailPokemon} buttonTitle="Excluir" background="red" />
      <MainContainer>
        <Title>Detalhes</Title>
        <SectionPokemon>
            <FirstContainer>
              <img src={detailPokemon.sprites.front_default} alt={detailPokemon.name} />
              <img src={detailPokemon.sprites.back_default} alt={detailPokemon.name} />
            </FirstContainer>
            <SecondContainer>
              <img src={teste3} alt="" />
            </SecondContainer>
            <ThirstContainer>
                <p>#{detailPokemon.id}</p>
                <h2>{detailPokemon.name.charAt(0).toUpperCase()+detailPokemon.name.slice(1)}</h2>
                <span>{elementPokemon}</span>
                <div>
                    <h3>Moves: </h3>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </ThirstContainer>
            <FourthContainer>
                <ImagePokemon src={detailPokemon.sprites.other["official-artwork"].front_default} alt="" />
            </FourthContainer>
        </SectionPokemon>
      </MainContainer>
    </>
  );
};
