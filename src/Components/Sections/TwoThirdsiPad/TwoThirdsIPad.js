import React from 'react';
import './TwoThirdsIPad.css';
import Vimeo from 'react-vimeo';

export default function TwoThirdsIPad(props) {

    console.log(props, 'ipad props')
    return (
        <div className='twoThirdsiPadMain'>
            <div className='videoFrame'>
                <iframe className='twoThirdsipadResize' src={props.media1.media_url} alt=''></iframe>

                {/* <Vimeo 
            
                videoId={225432736}
                autoplay={true}
                $mountNode
               /> */}



                <oembed>
                   <html/> <iframe src="https://player.vimeo.com/video/225432736?muted=0&autoplay=1" width="840" height="628" frameborder="10" allowfullscreen></iframe>


                </oembed>

            </div>
        </div>
    )
}