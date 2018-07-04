import React from 'react';
import './TwoThirdsIPad.css';
// import Vimeo from 'react-vimeo';


export default function TwoThirdsIPad(props) {

    console.log(props, 'ipad props')
    return (
        <div className='twoThirdsiPadMain'>
            <div className='videoFrame'>
                <div>
                    <iframe className='twoThirdsipadResize' width="1050" height="689" muted='1' autoPlay='0' frameBorder="1" allowFullScreen src={props.media1.media_url} alt=''></iframe>
                </div>
            </div>
        </div>
    )
}