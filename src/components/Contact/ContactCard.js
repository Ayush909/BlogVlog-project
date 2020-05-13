import React from 'react'
import './ContactCard.css'

function ContactCard(props){
    console.log(props.imgsrc)
    return(
        <div>
           <a href={`${props.link}`}> <img  alt="something" className="contact-icon" src={`/Icons-Images/${props.imgsrc}`}/></a> 
        </div>
    )
}

export default ContactCard