import React, { Component } from 'react';
import topArea from '../Sections/topArea'
import Full from '../Sections/Full'
import Half from '../Sections/Half'
import OneThird from '../Sections/OneThird'
import TwoThirds from '../Sections/TwoThirds'
export default class case4 extends Component{
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
        <Full/>
        <OneThird/>
        <Full/>
        <OneThird/>
        <Full/>
        <OneThird/>
        <Full/>
        <Half/>
        <OneThird/>
        <Half/>
        <Full/>
        <Full/>
        <OneThird/>
        <Full/>
        <Half/>
        </div>
    }

}