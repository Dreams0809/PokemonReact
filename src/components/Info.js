import React from "react"
import './css/Info.css'

export default function Info(props) {
    return (
        <div>
            <h3> {props.name}</h3>
            <h3> Name</h3>
            <div className='pokemon-info'>
                <h3> Attack: {props.attack} </h3>
                
            </div>

            <div className='pokemon-info'>
                <h3> Defense: {props.defense} </h3> 
                
            </div>

            <div className='pokemon-info'>
                <h3> Type:  {props.type}</h3>
              
            </div>
        </div>
        
    )
}