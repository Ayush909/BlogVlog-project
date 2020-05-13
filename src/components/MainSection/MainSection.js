import React, { Component } from 'react'
import './MainSection.css'
import PostCard from '../PostCards/PostCard'
import PostData from '../PostCards/info.json'

class MainSection extends Component{
    render(){
        return(
            <div className="mainsection">
                
                    {PostData.map( PostDetail=>(
                        <PostCard PostDetail={PostDetail}/>
                    ))}
                
                           
            </div>
        )
    }
}

export default MainSection