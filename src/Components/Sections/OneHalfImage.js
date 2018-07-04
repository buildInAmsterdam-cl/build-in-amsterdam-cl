import React from 'react';
import './OneHalfImage.css'

export default function OneHalfImage(props){
    // console.log(props, "half image props")
    return(
        <div className='oneHalfImageMain'>
            <img className='oneHalfImageSize' src={props.media1.media_url} alt='' />
        </div>
    )
}