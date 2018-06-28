import React, { Component } from 'react';
import TopArea from '../Sections/TopArea'
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
        Axios.get('/media/4').then((res) =>{
            console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/4').then((res) =>{
            console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render(){
        <div>
        <TopArea/>
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