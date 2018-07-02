import React from 'react';

// import './OneThirdCaptPic.css'

export default function OneThirdCaptPic(props){
    console.log(props)
    return (
        <div className='oneThirdCaptPicMain'>
            <img className='oneThirdCaptPicResize' src={props.media1.media_url} alt='' />
            <h3>{props.caption1.caption_title}</h3>
            <p>{props.caption1.caption_content}</p>
        </div>
    )
}