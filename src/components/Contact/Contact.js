import React from 'react'
import ContactCard from './ContactCard'
import './Contact.css'
function Contact(){
    return(
        <div className="contact-wrapper">
            <p>Contact me</p>
            <div className="cards-wrapper">
                <ContactCard link="https://www.linkedin.com/in/ayushsingh9/" imgsrc='linkedin.svg'/>
                <ContactCard link="https://github.com/Ayush909" imgsrc='github.svg'/>
                <ContactCard link="https://www.instagram.com/dev.ayu.co/" imgsrc='instagram.svg'/>
                <ContactCard link="https://twitter.com/AyushSinghKus" imgsrc='twitter.svg'/>
            </div>
            
            
        </div>
    )
}

export default Contact