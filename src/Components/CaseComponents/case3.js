import React, { Component } from 'react';
import topArea from '../Sections/topArea'
import Full from '../Sections/Full'
import Half from '../Sections/Half'
import OneThird from '../Sections/OneThird'
import TwoThirds from '../Sections/TwoThirds'
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
        <OneThird/>
        <Full/>
        <Full/>
        <TwoThirds/>
        <Full/>
        <TwoThirds/>
        <Half/>
        <Full/>
        <OneThirds/>
        <Full/>
        <TwoThirds/>
        <OneThird/>
        <OneThird/>
        <OneThird/>
        <OneThird/>
        <OneThird/>
        <Full/>
        </div>
    }

}