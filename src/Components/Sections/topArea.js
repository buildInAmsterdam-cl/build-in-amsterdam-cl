import React from 'react';
// import React, { Component } from 'react';
import {
    Parallax,
    // Background 
} from 'react-parallax'
import './topArea.css';

export default function TopArea(props) {

    // console.log(props)
    // console.log(props.indCase)
    console.log(props.indCase.background_url)
    let bgImageUrl = props.indCase.background_url

    return (
        <div className='topAreaMain'>
            <div className='topBgPicTitleArea' >
                <Parallax
                    className='parallaxTopArea'
                    blur={0}
                    // bgImage={String(bgImageUrl)}
                    // bgWidth='100%'
                    // bgImage={String(bgImageUrl)}
                    bgImage={"http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg"}
                    // bgImageSizes={{sizes: 0}}
                    bgImageAlt="Background Image"
                    // strength={140}
                    // strength={100}
                    strength={380}
                >
                    <div className='topTitleText'>{String(props.indCase.title)}</div>
                    {/* <div className='topTitleText'>Two locations<br /> one museum</div> */}
                    <div style={{
                        height: '78vh',
                        // zIndex: '-1'
                    }} />
                </Parallax>
                </div>
                <div className='secondTopAreaMain' >
                    {/* <img src={bgImageUrl} alt=''  style={{width: '100%'}}/> */}
                    <div className='secondLeftTop' style={{ background: (props.secDivLeftColor) }} ><blockquote className='topQuoteBlockStyle' >{props.indCase.blurb}</blockquote></div>
                    <div className='secondRightTop' style={{ background: (props.secDivRightColor) }}>

                        <div className='secondRightInnerTop' >
                            <h3>Awards & Recognition</h3>
                            <p>{props.indCase.award_blurb}</p>
                            <br />
                            <h3>Deliverables</h3>
                            <p>{props.indCase.deliverables}</p>
                            <br />
                            <h3>Visit site</h3>
                            <a>{props.indCase.link_url}</a>

                        </div>
                    </div>
                </div>


            </div>)

}
{/* export default TopArea; */}