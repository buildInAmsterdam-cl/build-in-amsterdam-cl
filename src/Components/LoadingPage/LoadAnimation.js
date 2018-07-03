import React, {Component} from 'react';
import './LoadAnimation.css'
import './SlideOutAnimation.css'
export default class LoadAnimation extends Component {

    render(){

    return(
        <div className='sliderMain'>
        <h1 className='hMain'>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>S</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>t</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>r</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>a</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>t</span></div>
            <div style={{ width: '3vw' }}><span className='slideLetterUp slideUp'>e</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>g</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>y</span></div>
            <div style={{ width: '3vw' }}><span className='slideLetterUp slideUp'>,</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'> </span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>B</span></div>
            <div style={{ width: '5vw' }}><span className='slideLetterUp slideUp'>r</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>a</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>n</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>d</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>i</span></div>
            <div style={{ width: '3vw' }}><span className='slideLetterUp slideUp'>n</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>g</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'> </span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>{'&'}</span></div>
        </h1>
        <h1 className='hMain2'>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>e</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>-</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>c</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>o</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>m</span></div>
            <div style={{ width: '6vw' }}><span className='slideLetterUp slideUp'>m</span></div>
            <div style={{ width: '6vw' }}><span className='slideLetterUp slideUp'>e</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>r</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>c</span></div>
            <div style={{ width: '4vw' }}><span className='slideLetterUp slideUp'>e</span></div>
        </h1>
        <div style={{ width: '33.333vw' }}>
            <div className='slider3rd slideScreen
            ' ></div>
        </div>
        <div style={{ width: '33.333vw' }}>
            <div className='slider3rd slideScreen' ></div>
        </div>
        <div style={{ width: '33.333vw' }}>
            <div className='slider3rd slideScreen' ></div>
        </div>
        {/* slideScreen */}
    </div>
    )
    }
}