import React, { Component } from 'react';
import Header from './components/Header'
import Hero from './components/Hero/Hero'
import MainSection from './components/MainSection/MainSection'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/Backdrop/BackDrop'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import PostsPage from './components/PostsPage/Postspage'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
      isTogglePressed : false
    }
  }

  handleDrawerToggle = ()=>{
    this.setState((prevState)=>{
       return {isTogglePressed : !prevState.isTogglePressed}
    })
  }
  handleBackDrop = ()=>{
    this.setState({
      isTogglePressed: false
    })
  } 

  
 render(){
   let backDrop;
   
   if(this.state.isTogglePressed){
     backDrop = <BackDrop handleBackDrop={this.handleBackDrop}/>
   }
   
    return (
      <div className="body-wrapper">
        <Router>
          <ScrollToTop >
          <Header handleDrawerToggle={this.handleDrawerToggle}/>
          <SideDrawer show={this.state.isTogglePressed}/>
          {backDrop}
          <Route path="/portfolio" component={()=>{
              window.location.href = "https://ayush909.github.io/TheAyushThing/";
              return null;
          }}/>
          <main style={{marginTop:"50px"}}>
            <Hero/>
            <Route path="/contact" component={Contact}/>

            <div className="main-part-div">
              
              <Route path="/" exact component={MainSection}/>
              <Route path="/posts/:id" component={PostsPage}/>
              
            </div>
          </main>
          <Footer/>
          </ScrollToTop>
        </Router>
      </div>
    )
  }
  
}

export default App;
