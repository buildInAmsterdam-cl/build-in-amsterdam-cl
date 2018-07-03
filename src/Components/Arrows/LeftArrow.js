import React, { Component } from 'react';

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
            <div className='left_footer'>
                <div >
                    <svg viewBox='0 0 0'>
                        <use href='#left_arrow' >
                            <polygon id='left_arrow' points='6.001,4.995 7.501,6.662 5.396,9 17.993,9 17.993,11 5.404,11 7.501,13.329 6.001,14.995 1.5,9.995'>
                            </polygon>
                        </use>
                    </svg>
                </div>
            </div>
        )
    }

}