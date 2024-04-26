import React from 'react'
import './css/Cards.css'
import Data from './Data'





export default function Cards (props){
    
    const [descriptionText, setDescriptionText] = React.useState("")
    
    function getDescription(){
        setDescriptionText(props.description)
    } 
    

    let pokemonType = props.isGrass === true ? "Grass" : "No"
    // if( props.isGrass){
    //     return grass
    // } else if (props.isFire){
    //     return fire
    // } else if (props.isWater){
    //     return Water
    // } else if(props.isGhost){
    //     return isGhost
    // } else(){
    //     return props.pokemon
    // }

    
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
                {/* <p> Type: {props.type}</p> */}
                <p> Type : {pokemonType} </p>
            </div>
            {/* {description} */}
            <button onClick={getDescription}> Click Me  </button> 
            <h1 className="description-text"> {descriptionText}</h1>
        </div>
    )
}

//Later I am going to add custom cards depending on the type of Pokemon 
