import React, { Component } from 'react'
import '../MainSection/MainSection.css'
import Post from './Post/Post'

class SinglePost extends Component{
    render(){
        console.log(this.props.match)
        return(
            <div className="mainsection">
                <Post id={this.props.match.params.id}/>   
            </div>
        )
    }
}

export default SinglePost