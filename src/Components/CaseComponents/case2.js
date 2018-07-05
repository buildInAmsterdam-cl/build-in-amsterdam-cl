import React, { Component } from 'react';
// import TopArea from '../Sections/topArea'
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
            // console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/2').then((res) =>{
            // console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render(){
        <div>
        {/* <TopArea/> */}
        </div>
    }

}