import { useNavigate } from "react-router-dom"
import { goToDetailPokemon } from "../../router/coordinator"
import { ArticleContainer, FirstContainer, SecondContainer, LinkFromDetail, ImagePokemon, Button } from "./PokemonCardStyled"
import teste from "../../assets/teste.png"


export const PokemonCard = (props) =>{
    const navigate = useNavigate()
    return(
        <>
        <ArticleContainer>
            <FirstContainer>
                <div>
                    <p>#01</p>
                    <h2>Bulbasaur</h2>
                    <span>Lógica</span>
                </div>
                <LinkFromDetail href="#" onClick={()=>{goToDetailPokemon(navigate)}}>Detalhe</LinkFromDetail>
            </FirstContainer>
            <SecondContainer>
                <ImagePokemon src={teste} alt="" />
                <Button style={{backgroundColor:props.buttonBackgroundColor, color:props.buttonColor}} >{props.buttonTitle}</Button>
            </SecondContainer>
        </ArticleContainer>
        <ArticleContainer>
            <FirstContainer>
                <div>
                    <p>#01</p>
                    <h2>Bulbasaur</h2>
                    <span>Lógica</span>
                </div>
                <LinkFromDetail href="#" onClick={()=>{goToDetailPokemon(navigate)}}>Detalhe</LinkFromDetail>
            </FirstContainer>
            <SecondContainer>
                <ImagePokemon src={teste} alt="" />
                <Button style={{backgroundColor:props.buttonBackgroundColor, color:props.buttonColor}} >{props.buttonTitle}</Button>
            </SecondContainer>
        </ArticleContainer> {/* ! TESTE*/}
        <ArticleContainer>
            <FirstContainer>
                <div>
                    <p>#01</p>
                    <h2>Bulbasaur</h2>
                    <span>Lógica</span>
                </div>
                <LinkFromDetail href="#" onClick={()=>{goToDetailPokemon(navigate)}}>Detalhe</LinkFromDetail>
            </FirstContainer>
            <SecondContainer>
                <ImagePokemon src={teste} alt="" />
                <Button style={{backgroundColor:props.buttonBackgroundColor, color:props.buttonColor}} >{props.buttonTitle}</Button>
            </SecondContainer>
        </ArticleContainer> {/* ! TESTE*/}
        </>
    )
}