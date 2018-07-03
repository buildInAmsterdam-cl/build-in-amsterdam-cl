import React from 'react';

import './ColorPicker.css'

export default function ColorPicker(props) {

    return (
        <div className='colorPickerMain'>
            {/* colorpicker hardcoded image */}
            <div><img className='colorPickerResize' alt='colors' /></div>
            <div className='colorCaptionContainer'>
                <div className='colorCaption'>
                    <h3>{props.caption1.caption_title}</h3>
                    <p>{props.caption1.caption_content}</p>
                </div>
            </div>
        </div>
    )
}