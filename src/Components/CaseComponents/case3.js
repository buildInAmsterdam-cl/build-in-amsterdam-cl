import React, { Component } from 'react';
import topArea from '../Sections/topArea'
import full from '../Sections/full'
import half from '../Sections/half'
import oneThird from '../Sections/oneThird'
import twoThirds from '../Sections/twoThirds'
export default class case3 extends Component{
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
        <Full/>
        <Full/>
        <twoThirds/>
        <Full/>
        <twoThirds/>
        <Half/>
        <Full/>
        <oneThirds/>
        <Full/>
        <twoThirds/>
        <oneThird/>
        <oneThird/>
        <oneThird/>
        <oneThird/>
        <oneThird/>
        <Full/>
        </div>
    }

}