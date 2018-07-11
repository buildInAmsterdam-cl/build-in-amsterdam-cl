import React, { Component } from 'react';
import './MainButton.css'
import Menu from '../Menu/Menu';

export default class MainButton extends Component {
    constructor() {
        super();

        this.state = {
            // menuDrawerAppear: false,
            // menuAppear: true,
            menuAppear: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this)

    }

    toggleMenu() {
        this.setState({ menuAppear: !this.state.menuAppear })
    }

    render() {
        // console.log('this is state menuAppear', this.state.menuAppear)
        return (
            <div>
                <div className={!this.state.menuAppear ? "main-buttonPage" : "main-buttonPage hideButton"} >
                    <div
                        // className="circle circleAnime" 
                        className="circle"
                        onClick={this.toggleMenu}>
                        <div className="hamburger">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div className='popOutBox' >
                        <div className='popOutBox_inner' >
                            <span>Menu</span>
                        </div>
                    </div>
                    {/* <div className="button-slide">Menu</div> */}
                </div>
                <div></div>
                <Menu
                    menuStyles={this.state.menuAppear ? 'menu' : 'menu hide'}
                    menuClose={this.toggleMenu}
                    menuAppear={this.state.menuAppear}
                />
            </div>
        )
    }
}
//styled button, always static. Off white with 
//on hover rotates 90 degrees and "Menu" bar slides out left to right
//on click, becomes "x" button "Menu" changes to "Close,"
//on click also toggles appearance Navigation bar (which covers the whole page). This is a separate component
//when "Close," on hover still rotates 90 degrees (x remains)
