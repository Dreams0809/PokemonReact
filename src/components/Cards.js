import React from 'react'
import './css/Cards.css'






export default function Cards (props){
    
    const [descriptionText, setDescriptionText] = React.useState("")
    
    function getDescription(){
        setDescriptionText(props.description)
    } 
    



    
    return(

        <div className={'pokemon-card'} >
            <section className='pokemon-frame'>
                <img src={`/photos/${props.img}`}/>
            </section>
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
            
            <button onClick={getDescription}> Click Me  </button> 
            <h1 className="description-text"> {descriptionText}</h1>
        </div>
    )
}

//Later I am going to add custom cards depending on the type of Pokemon 
