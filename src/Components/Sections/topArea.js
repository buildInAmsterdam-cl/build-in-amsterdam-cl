import React from 'react';
import { Parallax } from 'react-parallax'
import './TopAreaNewFixed.css';

export default function topArea(props) {
    let bgImageUrl = props.indCase.background_url
    let leftColor = ['', '', '', '', '', '', '']
    let rightColor = ['rgb(252, 228, 115)', '', '', '', '', '', 'rgb(245, 234, 175)']
    let breakUp = '';
    let firstPart = '';
    let secondPart = '';
    if (props.indCase[0] !== 'case') {
        breakUp = props.indCase.title.split(' ');
        firstPart = breakUp.splice(0, breakUp.length - 1).join(' ');
        secondPart = breakUp.splice(breakUp.length - 1, 1).join(' ');
    }
    return (
        <div className='topAreaMain'>
            <div className='topBgPicTitleArea' >
                <Parallax
                    className='parallaxTopArea'
                    blur={0}
                    bgImage={String(bgImageUrl)}
                    bgImageAlt="Background Image"
                    strength={380}
                >
                    <span className='span1' >
                        <div className='topTitleText slideUpTopArea'>
                            {String(firstPart)}
                        </div>
                    </span>
                    <span className='span2' >
                        <div className='topTitleText2 slideUpTopArea2'>
                            {String(secondPart)}
                        </div>
                    </span>
                    <div style={{ height: '78vh', width: '100vw' }} />
                </Parallax>
            </div>
            <div className='secondTopAreaMain' >
                <div className='secondLeftTop' style={{ background: (leftColor[props.indCase.case_id - 1]) }} ><blockquote className='topQuoteBlockStyle' >{props.indCase.blurb}</blockquote></div>
                <div className='secondRightTop' style={{ background: (rightColor[props.indCase.case_id - 1]) }}>
                    <div className='secondRightInnerTop' >
                        <div className='innerInnerTop' >
                            <h3>Awards & Recognition</h3>
                            <p>{props.indCase.award_blurb}</p>
                            <br />
                            <h3>Deliverables</h3>
                            <p>{props.indCase.deliverables}</p>
                            <br />
                            <h3>Visit site</h3>
                            <a className='aTagStyle undy'
                                href={`https://${props.indCase.link_url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{props.indCase.link_url}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}