import React from 'react';
import './TwoThirdsIPad.css';
import Vimeo from 'react-vimeo';


export default function TwoThirdsIPad(props) {

    console.log(props, 'ipad props')
    return (
        <div className='twoThirdsiPadMain'>
            <div className='videoFrame'>
                <div>
                    <iframe className='twoThirdsipadResize' width="840" height="628" muted='1' autoplay='1' frameborder="1" allowfullscreen src={props.media1.media_url} alt=''></iframe>
                    {/* <iframe>
                    <Vimeo
                        src={props.media1.media_url}
                        videoId={225432736}
                        autoplay={true}
                        muted={true}
                        $mountNode
                    />
                </iframe>
                <oembed>
                    <html /> <iframe src="https://player.vimeo.com/video/225432736?muted=0&autoplay=1" width="840" height="628" frameborder="10" allowfullscreen></iframe>
                </oembed> */}
                </div>
            </div>
        </div>
    )
}