import React, {Component} from 'react';
import MainButton from './MainButton/MainButton';
import BiALogo from './BiALogo/BiALogo';
import './NavBar.css'



export default function NavBar() {
   return(
       <div className = "navbar">
           <div className = "nav-left">
               <BiALogo/>
           </div>
           <div className = "nav-right">
               <MainButton/>
           </div>
       </div>
   )
}