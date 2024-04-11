import React from 'react'
import './css/Cards.css'



export default function Cards (props){
    return(
        <div className='pokemon-card'>
            <img src={props.img}/>
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
        </div>
    )
}
