import React from 'react';
import './OneHalfImage.css'

export default function OneHalfImage(props){

    return(
        <div className='oneHalfImageMain'>
            <img className='oneHalfImageSize' src={props.imageProp} alt='' />
        </div>
    )
}