import {
  MainContainer,
  Title,
  SectionPokemon,
  FirstContainer,
  SecondContainer,
  SecondContainerTitle,
  SecondContainerBaseStats,
  BaseStatsContent,
  BaseStatsName,
  BaseStatsValue,
  ThirstContainer,
  ThirstContainerMoves,
  PokemonId,
  PokemonName,
  TypesPokemon,
  TypeImage,
  FourthContainer,
  ImagePokemon,
  FirstContainerImage,
  MovesTitle,
  MovesContainer,
  MovesText,
  BaseStatsValueTotal,
  FirstContent,
  LineBaseStats,
} from "./PokemonDetailStyle";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { imageElementPokemon } from "../../utils/imageElementPokemon";
import { Progress, Stack } from "@chakra-ui/react";

export const PokemonDetailPage = () => {
  const context = useContext(GlobalContext);
  const { detailPokemon } = context;

  const elementPokemon = detailPokemon.types.map((type, index) => {
    return (
      <TypeImage
        key={index}
        src={imageElementPokemon(type.type.name)}
        alt={type.name}
      />
    );
  });

  const colorValueBaseStats = (value) =>{
    if (value <= 49) {
      return "red";
    } else if (value <= 79) {
      return "yellow";
    } else if (value >= 80) {
      return "green";
    }
  }

  const valueTotalBaseStats = detailPokemon.stats.reduce((valueInicial, valueAtual) => valueInicial + valueAtual.base_stat, 0)

  console.log(valueTotalBaseStats)

  return (
    <>
      <Header pokemon={detailPokemon} buttonTitle="Excluir" background="red" />
      <MainContainer>
        <Title>Detalhes</Title>
        <SectionPokemon elementoType={detailPokemon.types[0].type.name}>
          <FirstContainer>
            <FirstContent>
              <FirstContainerImage
              src={detailPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
              alt={detailPokemon.name}
            />
            </FirstContent>
            <FirstContent>
              <FirstContainerImage
              src={detailPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}
              alt={detailPokemon.name}
            />
            </FirstContent>
            
            
          </FirstContainer>
          <SecondContainer>
            <SecondContainerTitle>Base Stats</SecondContainerTitle>
            {detailPokemon.stats.map((stat, index) => {
              console.log(stat)
              return (
                <>
                  <SecondContainerBaseStats key={index}>
                    <BaseStatsContent>
                      <BaseStatsName>
                        {stat.stat.name.charAt(0).toUpperCase() +
                          stat.stat.name.slice(1)}
                      </BaseStatsName>
                      <BaseStatsValue>{stat.base_stat}</BaseStatsValue>
                    </BaseStatsContent>
                  </SecondContainerBaseStats>
                  <Stack w="100%" spacing={3}>
                      <Progress
                        colorScheme={colorValueBaseStats(stat.base_stat)}
                        borderRadius="5px"
                        size="sm"
                        value={stat.base_stat}
                      />
                  </Stack>
                  <LineBaseStats/>
                </>
              );
            })}
            <SecondContainerBaseStats>
              <BaseStatsContent>
                <BaseStatsName>Total</BaseStatsName>
                <BaseStatsValueTotal>{valueTotalBaseStats}</BaseStatsValueTotal>
              </BaseStatsContent>
              <BaseStatsValueTotal>
              </BaseStatsValueTotal>
            </SecondContainerBaseStats>
          </SecondContainer>
          <ThirstContainer>
            <PokemonId>#{detailPokemon.id}</PokemonId>
            <PokemonName>
              {detailPokemon.name.charAt(0).toUpperCase() +
                detailPokemon.name.slice(1)}
            </PokemonName>
            <TypesPokemon>{elementPokemon}</TypesPokemon>
            <ThirstContainerMoves>
              <MovesTitle>Moves: </MovesTitle>
              <MovesContainer>
                <MovesText>
                  {detailPokemon.moves[0].move.name.charAt(0).toUpperCase() +
                    detailPokemon.moves[0].move.name.slice(1)}
                </MovesText>
              </MovesContainer>
              <MovesContainer>
                <MovesText>
                  {detailPokemon.moves[1].move.name.charAt(0).toUpperCase() +
                    detailPokemon.moves[1].move.name.slice(1)}
                </MovesText>
              </MovesContainer>
              <MovesContainer>
                <MovesText>
                  {detailPokemon.moves[2].move.name.charAt(0).toUpperCase() +
                    detailPokemon.moves[2].move.name.slice(1)}
                </MovesText>
              </MovesContainer>
              <MovesContainer>
                <MovesText>
                  {detailPokemon.moves[3].move.name.charAt(0).toUpperCase() +
                    detailPokemon.moves[3].move.name.slice(1)}
                </MovesText>
              </MovesContainer>
            </ThirstContainerMoves>
          </ThirstContainer>
          <FourthContainer>
            <ImagePokemon
              src={
                detailPokemon.sprites.other["official-artwork"].front_default
              }
              alt=""
            />
          </FourthContainer>
        </SectionPokemon>
      </MainContainer>
    </>
  );
};
