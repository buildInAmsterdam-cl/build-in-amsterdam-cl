// import React, {Component} from 'react';
import React from 'react';
import MainButton from './MainButton/MainButton';
import BiALogo from './BiALogo/BiALogo';
import './NavBar.css'



export default class NavBar extends React.Component {
   constructor(){
       super()
       this.state = {
          menuOn: false,
       }
   }
   handleToggle = () => {
       this.setState({ menuOn: !this.state.menuOn})
   }
   render(){
    return(
       <div className ={this.state.menuOn ? 'navbar menuOn' : 'navbar'}>
           <div className = "nav-left">
               <BiALogo/>
           </div>
           <div className = "nav-right" onClick={()=> this.handleToggle()}>
               <MainButton/>
           </div>
       </div>
   )
}
}