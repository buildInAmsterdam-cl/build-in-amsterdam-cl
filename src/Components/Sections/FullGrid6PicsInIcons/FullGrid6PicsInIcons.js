import React from 'react';
import './FullGrid6PicsInIcons.css'

export default function FullGrid6PicsInIcons(props) {

    return (
        <div className='FullGrid6PicsInIconsMain'>
            <div className='blocks'>
                <img className='gridImg' src={props.media1.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media1.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media1.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media1.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media1.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media1.media_url} alt='' />
            </div>
        </div>
    )
}