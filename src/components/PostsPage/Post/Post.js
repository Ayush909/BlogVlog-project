import React, { Component } from 'react'
import './Post.css'

class Post extends Component{

    constructor(){
        super()
        this.state={
            list : ''
        }
    }
    componentDidMount(){
      let arr;
         
        // fetch('https://api.github.com/repos/Ayush909/Blogvlog/contents')
        //     .then(res => res.json())
        //     .then(data => {
            
        //     arr = data.map(post => post.url);

        //     arr.forEach(item => {
        //         fetch(item, {
        //         headers: {
        //                 'Accept': 'application/vnd.github.v3.html'
        //                 }
        //         })
        //         .then(res => res.text())
        //         .then(data => {
        //             let joined = this.state.list.concat(data)
        //             this.setState({
        //                 list: joined
        //             })
        //         })
        //     })
            
        // })
        fetch(`https://api.github.com/repos/Ayush909/Blogvlog/contents/${this.props.id}.md`,{
            headers: {
                        'Accept': 'application/vnd.github.v3.html'
                     }
        })
        .then(res=>res.text())
        .then(data=>{
            this.setState({
                list: data
            })
        })
        
                
        
               
    }
    
    render(){
        
         let elements = this.state.list;
        
        return(
            <div>
                
            <div className="post-main-div" dangerouslySetInnerHTML={{ __html: elements }}/> 
                
           </div>)
    }
}


export default Post