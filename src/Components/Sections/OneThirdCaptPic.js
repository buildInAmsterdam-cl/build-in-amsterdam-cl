import React from 'react';

import './OneThirdCaptPic.css'

export default function OneThirdCaptPic(props) {
    console.log(props)
    return (
        <div className='oneThirdCaptPicMain'>
            <div className='oneThirdCaptPicResize'><img src={props.media1.media_url} alt='' />
            </div>
            <div className='captionContain'>
            <div className='oneThirdCapt'>
                    <h3>{props.caption1.caption_title}</h3><br />
                    <p>{props.caption1.caption_content}</p>
                </div>
            </div>
               
        </div>
    )
}