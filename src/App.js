import React from "react"
import Cards from "./components/Cards"
import './components/css/App.css'
import Data from "./components/Data"

export default function App(){

    const  Pokemon = Data.pokemonData.id.map( info => {
        return (
            <Cards
            name= {info.pokemon}
            img = {info.coverImg }
            attack= {info.attack}
            defense= {info.defense}
            type= {info.type} 
            description= {info.description}
            /> 
        )
    })


    return(
        <div>
            <div className="pokemons">
                { Pokemon}                
            </div>        
        </div>
    )
}
