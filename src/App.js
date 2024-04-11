import React from "react"
import Cards from "./components/Cards"
import './components/css/App.css'
import Data from "./components/Data"

export default function App(){
    const  Pokemon = Data.map( id => {
        return (
            <Cards
            name= {id.pokemon}
            img = {id.coverImg }
            attack= {id.attack}
            defense= {id.defense}
            type= {id.type} 
            /> 
        )
    })

    return(
        <div className="pokemons">
            
            { Pokemon}


        
        </div>
    )
}