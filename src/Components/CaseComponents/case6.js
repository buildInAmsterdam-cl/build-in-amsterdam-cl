import React, { Component } from 'react';
import topArea from '../Sections/topArea'
import full from '../Sections/full'
import half from '../Sections/half'
import oneThird from '../Sections/oneThird'
import twoThirds from '../Sections/twoThirds'
export default class case6 extends Component{
    constructor(){
        super()
        this.state = {
            media = [],
            captions = []
        }
    
    }
    componentWillMount(){
        //axios call for media and captions
    }
    render(){
        <div>
        <topArea/>
        <oneThird/>
        <oneThird/>
        <oneThird/>
        <oneThird/>
        <oneThird/>
        <Full/>
        <oneThird/>
        <Full/>
        <oneThird/>
        <Full/>
        <oneThird/>
        <Full/>
        <oneThird/>
        <Half/>
        </div>
    }

}