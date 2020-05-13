import React from 'react'
import './Hero.css'
function Hero(props){
    return(
        <div className="hero-div">
            <p>Read.Learn.Create.</p>
            <div className="hero-topics">
                <ul>
                    <li><a className="button" href="/">Technical</a></li>
                    <li><a className="button" href="/">Design</a></li>
                    <li><a className="button" href="/">Life</a></li>
                    <li><a className="button" href="/">How to?</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Hero