import React from 'react';

import './OneThirdCapt.css'

export default function OneThirdCapt(props){
    // console.log(props.caption1.caption_title)
    return (
        <div className='oneThirdCaptMain'>
             <div className='captionContainer'>
                <div className='oneThirdCaptions'>
                    <h3>{props.caption1.caption_title}</h3><br />
                    <p>{props.caption1.caption_content}</p>
                </div>
            </div>
        </div>
    )
}