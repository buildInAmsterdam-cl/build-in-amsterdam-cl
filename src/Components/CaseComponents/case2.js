import React, { Component } from 'react';
import topArea from '../Sections/topArea'
import Full from '../Sections/Full'
import Half from '../Sections/Half'
import oneThird from '../Sections/oneThird'
import twoThirds from '../Sections/twoThirds'
export default class case2 extends Component{
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
        <oneThird/>
        <Half/>
        <twoThirds/>
        <Full/>
        <oneThird/>
        <oneThird/>
        <Full/>
        {/* 2x3 grid */}
        <oneThird/>
        <oneThird/>
        <Full/>
        </div>
    }

}