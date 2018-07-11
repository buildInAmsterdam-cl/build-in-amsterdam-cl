import React from 'react';
import './TwoThirdsIPad.css';
// import Vimeo from 'react-vimeo';


export default function TwoThirdsIPad(props) {

    // console.log(props, 'ipad props')
    return (
        <div className='twoThirdsiPadMain'>
            <div className='videoFrame'>
                <div>
                    <iframe className='twoThirdsipadResize' title={props.media1.media_id} width="100%" height="689" muted='1' autoPlay='1' frameBorder="1" overflow='hidden' src={props.media1.media_url} alt=''></iframe>

                    {/* <iframe width="100%" height="689" src="https://www.youtube.com/embed/aeyWekd_BVQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
                </div>
            </div>
        </div>
    )
}