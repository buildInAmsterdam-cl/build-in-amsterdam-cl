import React, { Component } from 'react';
import './MainButton.css'
import Menu from '../Menu/Menu';

export default class MainButton extends Component {
    constructor() {
        super();

        this.state = {
            menuDrawerAppear: false,
            menuAppear: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)

    }

    toggleMenu(){
        this.setState({ menuAppear: !this.state.menuAppear })
      }

    render() {
        return (
            <div>
                <div className="main-button" >
                  <button onClick={this.toggleMenu}>Button</button>
                  <div className={this.state.menuDrawerAppear? 'button-slide' : 'hide'}>Menu</div>
                </div>
                <div></div>
                <Menu menuToggle = {this.state.menuAppear ? 'menu' : 'menu hide'}/>
            </div>
        )
    }
}
//styled button, always static. Off white with 
//on hover rotates 90 degrees and "Menu" bar slides out left to right
//on click, becomes "x" button "Menu" changes to "Close,"
//on click also toggles appearance Navigation bar (which covers the whole page). This is a separate component
//when "Close," on hover still rotates 90 degrees (x remains)
