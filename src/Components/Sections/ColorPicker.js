import React from 'react';

// import './ColorPicker.css'

export default function ColorPicker(props){
    
    return (
        <div className='colorPickerMain'> 
        {/* colorpicker hardcoded image */}
            <img className='colorPickerResize' src='https://wbcomdesigns-8cc9.kxcdn.com/wp-content/uploads/2017/06/Best-Color-Picker-Tools.jpg'  alt='colors' /> 
            <h3>{props.caption1.caption_title}</h3>
            <p>{props.caption1.caption_content}</p>
        </div>
    )
}