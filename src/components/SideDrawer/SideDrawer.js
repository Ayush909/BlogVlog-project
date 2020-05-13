import React from 'react'
import './SideDrawer.css'
const SideDrawer = (props)=>{
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open-animation'
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="\">Topics</a></li>
                <li><a target="_blank" href="https://ayush909.github.io/TheAyushThing/">Portfolio</a></li>
                <li><a href="\contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer