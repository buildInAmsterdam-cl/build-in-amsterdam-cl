import React, { Component } from 'react';
import left_arrow from './leftArrow.png'


export default class LeftArrow extends Component {
    render() {
        return (
            <div className='left'>
                <img src={left_arrow} />
            </div>
        )
    }

}