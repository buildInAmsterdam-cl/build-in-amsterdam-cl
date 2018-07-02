import React from 'react';

import './TwoThirdsImage.css'
//need to conditionally render the image stying. If image height meets or exceeds outer div height, 
//style to crop, otherwise style to keep the image size as-is and center it in the div.

export default function TwoThirdsImage(props){
    
    return (
        <div className='twoThirdsImageMain'>
            <img className='twoThirdsImageResize' src={props.media1.media_url} alt='' />
        </div>
    )
}