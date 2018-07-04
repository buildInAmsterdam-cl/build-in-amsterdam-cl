import React from 'react';

import './ColorPickerNew.css'

export default function ColorPicker(props) {

    return (
        <div className='colorPickerMain'>
            <div className='colorCaptionContainer'>
                <div className='colorCaption'>
                    <h3>{props.caption1.caption_title}</h3>
                    <p>{props.caption1.caption_content}</p>
                </div>
            </div>
            {/* colorpicker hardcoded image */}
            <div className='colorPickerBar'>
                <div className='indivColor blue'>
                    {/* <img alt='colors' src="" /> */}
                    <div className='pantone'>
                        <p>Pantone 2905 C</p>
                        <p>C40 M11 Y0 K0</p>
                        <p>#88c6f2</p>
                    </div>
                </div>
                <div className='indivColor red'>
                    {/* <img alt='colors' src="" /> */}
                    <div className='pantone'>
                        <p>Pantone 032 C</p>
                        <p>C40 M11 Y0 K0</p>
                        <p>#ef5862</p>
                    </div>
                </div>
                <div className='indivColor green'>
                    {/* <img alt='colors' src="" /> */}
                    <div className='pantone'>
                        <p>Pantone 346 C</p>
                        <p>C44 M0 Y62 K0</p>
                        <p>#8bd592</p>
                    </div>
                </div>
                <div className='indivColor yellow'>
                    {/* <img alt='colors' src="" /> */}
                    <div className='pantone'>
                        <p>Pantone 127 C</p>
                        <p>C5 M9 Y64 K0</p>
                        <p>#f6dd86</p></div>
                </div>
                <div className='indivColor orange'>
                    {/* <img alt='colors' src="" /> */}
                    <div className='pantone'>
                        <p>Pantone 7410 C</p>
                        <p>C0 M45 Y60 K0</p>
                        <p>#ff9e74</p>
                    </div>
                </div>

            </div>

        </div>
    )
}