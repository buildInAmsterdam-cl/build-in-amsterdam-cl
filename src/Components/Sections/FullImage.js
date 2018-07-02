import React from 'react';

import './FullImage.css'

export default function FullImage(props){
    console.log(props.media1.media_url, "full image props")
    
    return (
        <div className='fullImageMain'>
            <img className='fullImageResize' src={props.media1.media_url} alt='' />
        </div>
    )
}