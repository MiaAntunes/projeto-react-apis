
export const goToPokedex = (navigate)=>{
    navigate("/pokedex")
}

export const goToPageMain = (navigate)=>{
    navigate("/")
}

export const goToDetailPokemon = (navigate, name)=>{
    navigate(`/detail-pokemon/${name}`)
}



