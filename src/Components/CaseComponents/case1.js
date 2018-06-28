import React, { Component } from 'react';
import topArea from '../Sections/topArea'
import Full from '../Sections/Full'
import Half from '../Sections/Half'
import OneThird from '../Sections/OneThird'
import TwoThirds from '../Sections/TwoThirds'
import Axios from 'axios';


export default class case1 extends Component{
    constructor(){
        super()
        this.state = {
            media: [],
            captions: []
        }
    
    }
    componentWillMount(){
        Axios.get('/media/1').then((res) =>{
            console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/1').then((res) =>{
            console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render(){
    return(
        <div>
        <TopArea/>
        <OneThird/>
        <OneThird/>
        <OneThird/>
        <OneThird/>
        <Full/>
        <OneThird/>
        <Half/>
        <Half/>
        <Full/>
        <OneThird/>
        </div>
    )
    }

}