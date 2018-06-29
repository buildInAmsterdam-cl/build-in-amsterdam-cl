import React from 'react';
import {Parallax} from 'react-parallax'
import './TopArea.css';

export default function topArea(props) {
    let bgImageUrl = props.indCase.background_url
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
                    <div className='topTitleText'>{String(props.indCase.title)}</div>
                    <div style={{ height: '78vh'}} />
                </Parallax>
            </div>
            <div className='secondTopAreaMain' >
                <div className='secondLeftTop' style={{ background: (props.secDivLeftColor) }} ><blockquote className='topQuoteBlockStyle' >{props.indCase.blurb}</blockquote></div>
                <div className='secondRightTop' style={{ background: (props.secDivRightColor) }}>
                    <div className='secondRightInnerTop' >
                        <div className='innerInnerTop' >
                            <h3>Awards & Recognition</h3>
                            <p>{props.indCase.award_blurb}</p>
                            <br />
                            <h3>Deliverables</h3>
                            <p>{props.indCase.deliverables}</p>
                            <br />
                            <h3>Visit site</h3>
                            {/* FIXME: Fix the underline property that is similar to contact page. */}
                            <a className='undy aTagStyle' 
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