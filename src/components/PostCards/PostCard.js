import React,{Component}  from 'react'
import {Link} from 'react-router-dom';
import './PostCard.css'

class PostCard extends Component{

    render(){
        
        return(
            <div className="postcard-wrapper">
                <div className="post-image-wrapper">
                    <img alt="thumbnail" src={require('./postThumbnails/'+ this.props.PostDetail.thumbnail)}/>
                </div>
                <div className="post-detail-wrapper">
                    <h2>{this.props.PostDetail.title}</h2>
                    <div className="post-author-date-wrapper">
                        <p>Author: {this.props.PostDetail.author}</p>
                        <p>{this.props.PostDetail.publishDate}</p>
                    </div>
                    <div className="post-summary-wrapper">
                        <p>{this.props.PostDetail.summary}</p>
                    </div>
                    <div className="read-more-button"> 
                        <Link to={`/posts/${this.props.PostDetail.postname}`}>
                            <button className="button">Read More</button>
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default PostCard