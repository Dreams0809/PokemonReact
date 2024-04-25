import React from 'react'
import './css/Cards.css'
import Data from './Data'





export default function Cards (props){
    
    const [descriptionText, setDescriptionText] = React.useState("")
    
    function getDescription(){
        const descriptionArray = Data.pokemonData.id
        setDescriptionText(descriptionArray.description)
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
            {/* {description} */}
            <button onClick={getDescription}>   </button> 
            <h1> {descriptionText}</h1>
        </div>
    )
}

//Later I am going to add custom cards depending on the type of Pokemon 
