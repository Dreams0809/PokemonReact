import React from 'react'
import './css/Cards.css'
import Data from './Data'




export default function Cards (props){
    
    let description

    function getDescription(){
        const dataDescription = Data.pokemonData.id.description
        description = dataDescription
        console.log(description)
    }
    
    
    return(

        <div className='pokemon-card'>
            <img src={`/photos/${props.img}`}/>
            <h3> {props.name}</h3>
            <div className='pokemon-info'>
                <p> Attack: {props.attack} </p> 
            </div>
            <div className='pokemon-info'>
                <p> Defense: {props.defense}</p>
            </div>
            <div className='pokemon-info'>
                <p> Type: {props.type}</p>
            </div>
            <button onClick={getDescription}> Click Me</button> 
        </div>
    )
}

//Later I am going to add custom cards depending on the type of Pokemon 
