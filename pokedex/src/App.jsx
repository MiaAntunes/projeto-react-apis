import { Router } from "./router/Router"
import { GlobalStyle } from "./GlobalStyle"
import { GlobalState } from "./contexts/GlobalState"
import { ChakraProvider } from "@chakra-ui/react"
import { ModalPokemon } from "./components/Modal/Modal"

function App() {
  return (
    <>
     <GlobalState>
         <GlobalStyle/>
         <ChakraProvider>
         <Router/>
         <ModalPokemon/>
         </ChakraProvider>
      </GlobalState>
    </>
  )
}

export default App
