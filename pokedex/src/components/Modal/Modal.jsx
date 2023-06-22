import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Container,
} from "@chakra-ui/react";
import { Title, Text } from "./ModalStyles";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const ModalPokemon = () => {
  const context = useContext(GlobalContext);
  const { modalPokemon, setModalPokemon, modalStatus, setModalStatus } =
    context;


  return (
    <>
      <Modal isOpen={modalPokemon} onClose={() => setModalPokemon(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Flex
            style={{ borderRadius: "10rem" }}
            height={"20vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {modalStatus === 0 ? (
              <Container
                display={"flex"}
                height={"20vh"}
                width={"100%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ModalBody
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={".5em"}
                >
                  <Title>Gotcha!</Title>
                  <Text>
                    O Pokémon foi adicionado a sua Pokédex
                  </Text>
                </ModalBody>
              </Container>
            ) : (
              <>
                <ModalBody
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={".5em"}
                >
                  <Title>Oh, no!</Title>
                  <Text >
                    O Pokémon foi excluido da sua Pokédex
                  </Text>
                </ModalBody>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
