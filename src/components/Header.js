import React from 'react'
import menuicon from './icons/menu-icon.png'
import {Link} from 'react-router-dom'
import './Header.css';

const Header = (props)=>{
    return(
        <header className="headertag">
            <nav className="navtag">
                <div className="menuicon" onClick={props.handleDrawerToggle}><img src={menuicon} alt="logo" /></div>
                <div className="logo"><a href="\">BLOGVLOG</a></div>
                <div className="spacer"></div>
                <div className="navbar-items">
                    <ul>
                        <Link to="/">
                            <button className="button">Topics</button>
                        </Link>
                        <Link to="/portfolio">
                             <button className="button">Portfolio</button>
                        </Link>
                        <Link to="/contact">
                            <button className="button">Contact</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header