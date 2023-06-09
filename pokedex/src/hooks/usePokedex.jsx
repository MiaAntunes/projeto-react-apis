import { useEffect } from "react"
import { useState } from "react"


export const usePokedex = (inicialState) =>{
    const [myPokedex, setMyPokedex] = useState(inicialState)

    return [myPokedex, setMyPokedex]
}