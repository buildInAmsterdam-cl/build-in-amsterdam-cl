import React, { Component } from 'react';
import '../Arrows/RightArrow.css';

export default class RightArrow extends Component {
    constructor() {
        super()
        this.state = {
            arrowDisabled: true,
            arrowToggle: false
        }
    }
    render() {
        return (
            <div className='right_footer'>
                <div className=''>
                    <svg viewBox='0 0 0'>
                        <use href='#right_arrow' >
                            <polygon id='right_arrow' points="13.493,4.995 11.993,6.662 14.097,9 1.5,9 1.5,11 14.089,11 11.993,13.329 13.493,14.995 17.993,9.995">
                            </polygon>
                        </use>
                    </svg>
                </div>
            </div>
        )
    }
}