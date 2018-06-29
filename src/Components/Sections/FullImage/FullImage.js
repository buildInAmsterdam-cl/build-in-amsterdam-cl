import React from 'react';

import './FullImage.css'

export default function FullImage(props){

    return (
        <div className='fullImageMain'>
            <img src={props.imageProp} alt='' />
        </div>
    )
}