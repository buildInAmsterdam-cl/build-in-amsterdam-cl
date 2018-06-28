import React, { Component } from 'react';
import topArea from '../Sections/topArea'
import Full from '../Sections/Full'
import Half from '../Sections/Half'
import OneThird from '../Sections/OneThird'
import TwoThirds from '../Sections/TwoThirds'
export default class case5 extends Component{
    constructor(){
        super()
        this.state = {
            media = [],
            captions = []
        }
    
    }
    componentWillMount(){
        Axios.get('/media/5').then((res) =>{
            console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/5').then((res) =>{
            console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render(){
        <div>
        <topArea/>
        <OneThird/>
        <Full/>
        <OneThird/>
        <Half/>
        <Full/>
        <OneThird/>
        <OneThird/>
        {/* 1x3 grid */}
        <Full/>
        </div>
    }

}