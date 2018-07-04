import React, { Component } from 'react';
import TopArea from '../Sections/topArea'
export default class case6 extends Component{
    constructor(){
        super()
        this.state = {
            media = [],
            captions = []
        }
    
    }
    componentWillMount(){
        Axios.get('/media/6').then((res) =>{
            // console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/6').then((res) =>{
            // console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render(){
        <div>
        <TopArea/>
        </div>
    }

}