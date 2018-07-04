import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import '../MainButton/MainButton.css';

export default class Menu extends Component {

    render() {
        let { menuStyles } = this.props
        return (
            
            <div className={menuStyles} onClick={this.props.menuClose}>

  <div className="main-button" >
                    <div className="circle" onClick={this.props.menuClose}>
                        <div className="hamburger">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    {/* <div className="button-slide">Menu</div> */}
                </div>
                <Link to="/" style={{ textDecoration: "none", color: "#fbf9f6" }}>
                    <div className="cases">
                        <div className="menu-bar">
                            <div className="menu-text">
                                <h1 className="underline">Cases</h1>
                                <div className="text-expand">
                                    <p>We like to let our work do the talking</p>
                                    <p>Go to Cases</p></div>
                                </div>
                        </div>
                    </div>
                </Link>
                <Link to="/about" style={{ textDecoration: "none", color: "#fbf9f6" }}>
                    <div className="menu-about">
                        <div className="menu-bar">
                            <div className="menu-text">
                                <h1 className="underline">About</h1>
                                <div className="text-expand">
                                    <p>We are a branding agency specialized in e-commerce</p>
                                    <p>Go to About</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none", color: "#fbf9f6" }}>
                    <div className="contact">
                        <div className="menu-bar">
                            <div className="menu-text">
                                <h1 className="underline">Contact</h1>
                                <div className="text-expand">
                                    <p>Rombout Hogerbeetsstraat 109-1 1052 VW Amsterdam The Netherlands</p>
                                    <p>Go to Contact</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}