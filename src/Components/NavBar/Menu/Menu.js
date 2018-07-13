import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import '../MainButton/MainButton.css';

export default class Menu extends Component {
    constructor() {
        super()
        this.state = {
            countdown: 0,
            show: false,
            showGoOut: false,
        }
    }
    incrementTimer = () => {
        this.setState({ countdown: this.state.countdown + 1 })
    }
    toggleShow = () => {
        this.setState({ show: !this.state.show })
    }
    toggleShowGoOut = () => {
        this.setState({ showGoOut: !this.state.showGoOut })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.menuAppear !== this.props.menuAppear) {
            if (this.props.menuAppear) {
                // console.log('go in')
                this.toggleShow()
                setTimeout(() => {
                    this.toggleShow();
                }, 1500)
            } else {
                // console.log('go out')
                this.toggleShowGoOut()
                setTimeout(() => {
                    this.toggleShowGoOut();
                }, 2002)
            }
        }
    }
    render() {
        let { menuStyles } = this.props
        let showNormal = !this.state.showGoOut ? (<div className={this.state.show ? 'hamTrans ' : "hamTransNorm"}>
            <div className={this.state.show ? 'barLeftAnimatIn ' : "barLeft"}></div>
            <div className={this.state.show ? 'barMiddleAnimatIn ' : "barMiddle"}></div>
            <div className={this.state.show ? 'barRightAnimatIn ' : "barRight"}></div>
        </div>) : ''
        return (

            <div className={menuStyles} onClick={this.props.menuClose}>


                <div className="main-button" >
                    <div
                        // className="circle circleAnime"
                        className="circle"
                    // onClick={this.props.menuClose}
                    >
                        <div className={this.state.showGoOut ? 'hamTransOut ' : ""}>
                            <div className={this.state.showGoOut ? 'barLeftAnimatOut ' : ""}></div>
                            <div className={this.state.showGoOut ? 'barMiddleAnimatOut ' : ""}></div>
                            <div className={this.state.showGoOut ? 'barRightAnimatOut ' : ""}></div>
                        </div>
                        {showNormal}

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
                                    <br /><br />
                                    <div className="text-expand">
                                        <p>We like to let our work do the talking</p><br />
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
                                    </div><br /><br />
                                    <div className="text-expand">
                                        <p>We are a branding agency specialized in e-commerce</p><br />
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
                                    </div><br /><br />
                                    <div className="text-expand">
                                        <p>Rombout Hogerbeetsstraat 109-1 <br />1052 VW Amsterdam<br />The Netherlands</p><br />
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