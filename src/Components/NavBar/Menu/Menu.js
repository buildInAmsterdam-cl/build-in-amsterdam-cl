import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import '../MainButton/MainButton.css';

export default class Menu extends Component {
    render() {
        // console.log('this is menuAppear props', this.props.menuAppear)
        let { menuStyles } = this.props
        return (

            <div className={menuStyles} onClick={this.props.menuClose}>

                <div className="main-button" >
                     <div 
                        // className="circle circleAnime"
                        className="circle"
                        // onClick={this.props.menuClose}
                        >
                         <div className="hamTrans">
                             <div className="barLeft">x</div> 
                             <div className="barMiddle"></div> 
                             <div className="barRight"></div> 
                        </div>
                    </div>
                    <div className='popOutBox' >
                        <div className='popOutBox_inner' >
                            <span>Close</span>
                        </div>
                    </div>
                    {/* <div className="button-slide">Menu</div> */}
                </div>
                <div className='outerMenuThirdBox'>
                    <Link to="/" style={{ textDecoration: "none", color: "#fbf9f6" }}>
                        <div
                            // className="cases"
                            className={
                                this.props.menuAppear ?
                                // this.state.currentAnimation === 'start' ? 
                                'cases enter slideInMenu' : 'cases leave slideOutMenu'}
                        >
                            <div className="menu-bar">
                                <div className="menu-text">
                                    <div className='h1ContainerMenu' >
                                    <h1 className="h1Con underline">Cases</h1>
                                    </div>
                                    <br/><br/>
                                    <div className="text-expand">
                                        <p>We like to let our work do the talking</p><br/>
                                        <p className='boldPTag'>Go to Cases</p></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='outerMenuThirdBox'>
                    <Link to="/about" style={{ textDecoration: "none", color: "#fbf9f6" }}>
                        <div
                            className={
                                this.props.menuAppear ?
                                // this.state.currentAnimation === 'start' ? 
                                'menu-about enter slideInMenu' : 'menu-about leave slideOutMenu'}
                        // // className="menu-about"
                        >
                            <div className="menu-bar">
                                <div className="menu-text">
                                <div className='h1ContainerMenu' >
                                    <h1 className="h1Con underline">About</h1>
                                    </div><br/><br/>
                                    <div className="text-expand">
                                        <p>We are a branding agency specialized in e-commerce</p><br/>
                                        <p className='boldPTag'>Go to About</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className='outerMenuThirdBox'>
                    <Link to="/contact" style={{ textDecoration: "none", color: "#fbf9f6" }}>
                        <div
                            className={
                                this.props.menuAppear ?
                                // this.state.currentAnimation === 'start' ?
                                 'contact enter slideInMenu' : 'contact leave slideOutMenu'}
                            // className="contact"
                        >
                            <div className="menu-bar">
                                <div className="menu-text">
                                <div className='h1ContainerMenu' >
                                    <h1 className="h1Con underline">Contact</h1>
                                    </div><br/><br/>
                                    <div className="text-expand">
                                        <p>Rombout Hogerbeetsstraat 109-1 <br/>1052 VW Amsterdam<br/>The Netherlands</p><br/>
                                        <p className='boldPTag'>Go to Contact</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}