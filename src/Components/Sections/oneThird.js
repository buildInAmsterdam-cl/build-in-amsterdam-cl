import React, { Component } from 'react';
import './sections.css'
export default function OneThird(props){
    return(
        <div className='onethird'>
            {props.children}
        </div>
    )
}