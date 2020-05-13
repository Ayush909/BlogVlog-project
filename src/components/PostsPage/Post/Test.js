import React, { Component } from 'react'
import './Post.css'

class Test extends Component{

    constructor(){
        super()
        this.state={
            list : []
        }
    }
    componentDidMount(){
      let arr;
         
        fetch('https://api.github.com/repos/Ayush909/Blogvlog/contents')
            .then(res => res.json())
            .then(data => {
            
            arr = data.map(post => post.url);

            arr.forEach(item => {
                fetch(item, {
                headers: {
                        'Accept': 'application/vnd.github.v3.html'
                        }
                })
                .then(res => res.text())
                .then(data => {
                    this.setState(prevState=>({
                        list : [...prevState.list, data]
                    }))
                })
            })
            
        })
               
    }
    
    render(){
        
         let elements = this.state.list;
        console.log(elements.length)
        return(
            <div>
                <div className="post-main-div" dangerouslySetInnerHTML={{ __html: elements }}/>
           
           </div>)
    }
}


export default Test