import React, { Component } from 'react';
import TopArea from '../Sections/TopArea'
import Full from '../Sections/Full'
import Half from '../Sections/Half'
import OneThird from '../Sections/OneThird'
import TwoThirds from '../Sections/TwoThirds'
export default class case2 extends Component{
    constructor(){
        super()
        this.state = {
            media = [],
            captions = []
        }
    
    }
    componentWillMount(){
        Axios.get('/media/2').then((res) =>{
            console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/2').then((res) =>{
            console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render(){
        <div>
        <TopArea/>
        <OneThird/>
        <Full/>
        <OneThird/>
        <Half/>
        <TwoThirds/>
        <Full/>
        <OneThird/>
        <OneThird/>
        <Full/>
        {/* 2x3 grid */}
        <OneThird/>
        <OneThird/>
        <Full/>
        </div>
    }

}