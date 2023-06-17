
export const goToPokedex = (navigate)=>{
    navigate("/pokedex")
}

export const goToPageMain = (navigate)=>{
    navigate("/home")
}

export const goToDetailPokemon = (navigate, name)=>{
    navigate(`/detail-pokemon/${name}`)
}



