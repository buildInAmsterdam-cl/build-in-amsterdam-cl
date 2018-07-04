import React from 'react';
import './FullGrid6PicsInIcons.css'

export default function FullGrid6PicsInIcons(props) {
    // console.log(props)
    return (
        <div className='FullGrid6PicsInIconsMain'>
            <div className='blocks'>
                <img className='gridImg' src={props.media1.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media2.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media3.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media4.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media5.media_url} alt='' />
            </div>
            <div className='blocks'>
                <img className='gridImg' src={props.media6.media_url} alt='' />
            </div>
        </div>
    )
}