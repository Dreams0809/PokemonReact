import React from 'react'
import './css/Cards.css'
import Data from './Data'





export default function Cards (props){
    
    const [description , setDescription] = React.useState("yes")
    
    function handleClick(){
        // return setDescription("No")
        return (Data.pokemonData.id.description)
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
            <button onClick={handleClick}> {description}  </button> 
        </div>
    )
}

//Later I am going to add custom cards depending on the type of Pokemon 
