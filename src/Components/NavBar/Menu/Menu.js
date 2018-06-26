import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
    
    render() {
        let {menuToggle} = this.props
        return (
            <div className={menuToggle}>
                <Link to="/">
                    <h1>Cases</h1>
                    <p>We like to let our work do the talking</p>
                    <p>Go to Cases</p>
                </Link>
                <Link to="/about">
                    <h1>About</h1>
                    <p>We are a branding agency specialized in e-commerce</p>
                    <p>Go to About</p>
                </Link>
                <Link to="/contact">
                    <h1>Contact</h1>
                    <p>Rombout Hogerbeetsstraat 109-1 1052 VW Amsterdam The Netherlands</p>
                    <p>Go to Contact</p>
                </Link>
            </div>
        )
    }
}