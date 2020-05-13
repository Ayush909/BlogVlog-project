import React from 'react'
import './BackDrop.css'

const BackDrop = (props)=>{
    return(
        <div className="backdrop" onClick={props.handleBackDrop}></div>
    )
}

export default BackDrop