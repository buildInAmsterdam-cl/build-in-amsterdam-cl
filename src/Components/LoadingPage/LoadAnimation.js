import React, { Component } from 'react';
import './LoadAnimation.css'
import './SlideOutAnimation.css'
export default class LoadAnimation extends Component {

    constructor() {
        super()
        this.state = {
            countdown: 0,
            show: true,
        }
    }
    incrementTimer = () => {
        this.setState({ countdown: this.state.countdown + 1 })
    }
    toggleShow = () => {
        this.setState({ show: false })
    }
    timer = () => {
        if (this.state.show) {
            setTimeout(() => {
                this.incrementTimer();
                if (this.state.countdown > 3) {
                    this.toggleShow();
                }
            }, 1000)
        }

    }
    render() {
        return (
            <div className='sliderMain'>
            {this.timer()}
                <div style={{ width: '33.333vw', height: '100vh', background: 'transparent' }}>
                    <div className='slider3rd slideScreen' ></div>
                </div>
                <div style={{ width: '33.333vw' }}>
                    <div className='slider3rd slideScreen' ></div>
                </div>
                <div style={{ width: '33.333vw' }}>
                    <div className='slider3rd slideScreen' ></div>
                </div>
                {this.state.show ? (
                    <div className='sliderMain'>
                        <h1 className='hMain'>
                            <div style={{ width: '80px' }}><span className='slideLetterUp slideUp'>S</span></div>
                            <div style={{ width: '40px' }}><span className='slideLetterUp slideUp'>t</span></div>
                            <div style={{ width: '40px' }}><span className='slideLetterUp slideUp'>r</span></div>
                            <div style={{ width: '60px'}}><span className='slideLetterUp slideUp'>a</span></div>
                            <div style={{ width: '40px' }}><span className='slideLetterUp slideUp'>t</span></div>
                            <div style={{ width: '65px' }}><span className='slideLetterUp slideUp'>e</span></div>
                            <div style={{ width: '65px' }}><span className='slideLetterUp slideUp'>g</span></div>
                            <div style={{ width: '65px' }}><span className='slideLetterUp slideUp'>y</span></div>
                            <div style={{ width: '28px' }}><span className='slideLetterUp slideUp'>,</span></div>
                            <div style={{ width: '1vw' }}><span className='slideLetterUp slideUp'> </span></div>
                            <div style={{ width: '80px' }}><span className='slideLetterUp slideUp'>B</span></div>
                            <div style={{ width: '52px' }}><span className='slideLetterUp slideUp'>r</span></div>
                            <div style={{ width: '60px' }}><span className='slideLetterUp slideUp'>a</span></div>
                            <div style={{ width: '70px' }}><span className='slideLetterUp slideUp'>n</span></div>
                            <div style={{ width: '70px' }}><span className='slideLetterUp slideUp'>d</span></div>
                            <div style={{ width: '30px' }}><span className='slideLetterUp slideUp'>i</span></div>
                            <div style={{ width: '80px' }}><span className='slideLetterUp slideUp'>n</span></div>
                            <div style={{ width: '70px' }}><span className='slideLetterUp slideUp'>g</span></div>
                            <div style={{ width: '2vw' }}><span className='slideLetterUp slideUp'> </span></div>
                            <div style={{ width: '85px' }}><span className='slideLetterUp slideUp'>{'&'}</span></div>
                        </h1>
                        <h1 className='hMain2'>
                            <div style={{ width: '65px' }}><span className='slideLetterUp slideUp'>e</span></div>
                            <div style={{ width: '50px' }}><span className='slideLetterUp slideUp'>-</span></div>
                            <div style={{ width: '70px' }}><span className='slideLetterUp slideUp'>c</span></div>
                            <div style={{ width: '70px' }}><span className='slideLetterUp slideUp'>o</span></div>
                            <div style={{ width: '100px' }}><span className='slideLetterUp slideUp'>m</span></div>
                            <div style={{ width: '100px' }}><span className='slideLetterUp slideUp'>m</span></div>
                            <div style={{ width: '65px' }}><span className='slideLetterUp slideUp'>e</span></div>
                            <div style={{ width: '52px' }}><span className='slideLetterUp slideUp'>r</span></div>
                            <div style={{ width: '70px' }}><span className='slideLetterUp slideUp'>c</span></div>
                            <div style={{ width: '65px' }}><span className='slideLetterUp slideUp'>e</span></div>
                        </h1></div>)
                    : ''}
            </div>
        )
    }
}