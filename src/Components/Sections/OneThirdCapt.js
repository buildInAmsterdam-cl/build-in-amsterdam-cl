import React from 'react';

// import './OneThirdCapt.css'

export default function OneThirdCapt(props){
    console.log(props.caption1.caption_title)
    return (
        <div className='oneThirdCaptMain'>
            <h3>{props.caption1.caption_title}</h3>
            <p>{props.caption1.caption_content}</p>
        </div>
    )
}