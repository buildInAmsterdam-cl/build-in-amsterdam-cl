import React from 'react';
import './TwoThirdsIPad.css'

export default function TwoThirdsIPad(props) {

    return (
        <div className='twoThirdsiPadMain'>
            <div className='videoFrame'>
                <img className='twoThirdsipadResize' src={props.media1.media_url} alt='' />
            </div>
        </div>
    )
}