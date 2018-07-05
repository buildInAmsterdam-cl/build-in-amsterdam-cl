import React from 'react';

import './OneFullFontGrid.css'

export default function OneFullFontGrid(props) {
    // console.log(props)
    return (
        <div className='oneFullFontGridMain'>
            <div className='oneFullFontGridDiv'>
                <div className='oneFullFonttxt'>
                    <h3>{props.caption1.caption_title}</h3>
                    <p>{props.caption1.caption_content}</p>
                </div>
                <div className='oneFullFontGridImg'><img src={props.media1.media_url} alt='' /></div>
            </div>
            <div className='oneFullFontGridDiv'>
                <div className='oneFullFonttxt'>
                    <h3>{props.caption2.caption_title}</h3>
                    <p>{props.caption2.caption_content}</p>
            </div>
                <div className='oneFullFontGridImg' ><img src={props.media2.media_url} alt='' /></div>
            </div>
            <div className='oneFullFontGridDiv'>
                <div className='oneFullFonttxt'>
                    <h3>{props.caption3.caption_title}</h3>
                    <p>{props.caption3.caption_content}</p>
                </div>
                <div className='oneFullFontGridImg'><img src={props.media3.media_url} alt='' /></div>
            </div>
        </div>

    )
}