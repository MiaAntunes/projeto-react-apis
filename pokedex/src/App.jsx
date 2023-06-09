import { Router } from "./router/Router"
import { GlobalStyle } from "./GlobalStyle"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <>
        <GlobalStyle/>
        <Router/>
    </>
  )
}

export default App
