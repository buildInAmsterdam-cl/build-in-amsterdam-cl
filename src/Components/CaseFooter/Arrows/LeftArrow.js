import React, { Component } from 'react';
import left_arrow from './leftArrow.png'


export default class LeftArrow extends Component {
    constructor() {
        super()
        this.state = {
            arrowDisabled: true,
            arrowToggle: false
        }
    }
    render() {
        return (
            <div className='left'>
                <img src={left_arrow} />
            </div>
        )
    }

}