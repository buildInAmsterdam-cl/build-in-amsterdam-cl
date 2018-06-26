import React, { Component } from 'react';
import './BiALogo.css';
import {Link} from 'react-router-dom';


export default class BiALogo extends Component {
    constructor() {
        super();

        this.state = {
            transform: false,
            backArrow: false
        }

    }

    render() {
        return (
            <div className="logo-outer">
                <div> 
                <Link to="/">Build in Amsterdam</Link>
                </div>
            </div>
        )
    }
}