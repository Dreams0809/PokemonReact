import React from "react"
import Cards from "./components/Cards"
import './components/css/App.css'

export default function App(){
    return(
        <div className="pokemons">
            <Cards
            
            // name="Charmander"
            // img = "./photos/charmander.png"
            // attack="89"
            // defense="54"
            // type="fire" 
            />
          

            <Cards 
            // name="Treecko"
            // img = "./photos/treecko.png"
            // attack="89"
            // defense="54"
            // type="grass"
            />

            <Cards 
            // name="Piplup"
            // img = "./photos/piplup.png"
            // attack="89"
            // defense="54"
            // type="water"
            />

            <Cards 
            // name="Gengar"
            // img = "./photos/gengar.png"
            // attack="89"
            // defense="54"
            // type="ghost"

            />


        
        </div>
    )
}