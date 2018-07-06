import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import '../MainButton/MainButton.css';

export default class Menu extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         countdown: 0,
    //         show: true,
    //     }
    // }
    // incrementTimer = () => {
    //     this.setState({ countdown: this.state.countdown + 1 })
    // }
    // toggleShow = () => {
    //     this.setState({ show: false })
    // }
    // timer = () => {
    //     if (this.state.show) {
    //         setTimeout(() => {
    //             this.incrementTimer();
    //             if (this.state.countdown > 4) {
    //                 this.toggleShow();
    //             }
    //         }, 1000)
    //     }
    // }

    // constructor() {
    //     //the different values that the animation will decide if the state is changed on the menu click:
    //     // none - default, no animation, menu closed.
    //     // start - slide in animation
    //     // leave - slide out animation
    //     super()
    //     this.state = {
    //         currentAnimation: 'none',
    //     }

    // }
    // handleSwitchToStart = () => { this.setState({ currentAnimation: 'start' }) }
    // handleSwitchToLeave = () => { this.setState({ currentAnimation: 'leave' }) }
    // handleSwitchToNoAnimation = () => { this.setState({ currentAnimation: 'none' }) }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevProps)
    //     if (prevProps.menuAppear !== this.props.menuAppear) {
    //         // if(prevState.currentAnimation !== 'start'){
    //         if (prevProps.menuAppear) { //If was false, previously so now true
    //             this.handleSwitchToStart();
    //         } else {
    //             this.handleSwitchToLeave();
    //         }
    //         console.log('this is previous props', prevProps)
    //         console.log('this is previous state', prevState)
    //         console.log('this is snapshot', snapshot)
    //         // this.handleSwitchToStart();
    //     }
    // }

    render() {
        // console.log(this.props.menuAppear)
        console.log('this is menuAppear props', this.props.menuAppear)
        let { menuStyles } = this.props
        return (

            <div className={menuStyles} onClick={this.props.menuClose}>

                <div className="main-button" >
                     <div 
                        // className="circle circleAnime"
                        className="circle"
                        // onClick={this.props.menuClose}
                        >
                         <div className="hamburger">
                             <div className="bar"></div> 
                             <div className="bar"></div> 
                             <div className="bar"></div> 
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
                                    <h1 className="underline">Cases</h1>
                                    <div className="text-expand">
                                        <p>We like to let our work do the talking</p>
                                        <p>Go to Cases</p></div>
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
                                    <h1 className="underline">About</h1>
                                    <div className="text-expand">
                                        <p>We are a branding agency specialized in e-commerce</p>
                                        <p>Go to About</p>
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
            </div>
        )
    }
}