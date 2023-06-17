import { Router } from "./router/Router"
import { GlobalStyle } from "./GlobalStyle"
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalState } from "./contexts/GlobalState"

function App() {
  return (
    <>
     <ChakraProvider>
     <GlobalState>
         <GlobalStyle/>
         <Router/>
      </GlobalState>
     </ChakraProvider>
    </>
  )
}

export default App
