import React, { Component } from 'react';
import TopArea from '../Sections/TopArea'
import Full from '../Sections/Full'
import Half from '../Sections/Half'
import OneThird from '../Sections/oneThird';
import TwoThirds from '../Sections/twoThirds'
import Axios from 'axios';


export default class case1 extends Component {
    constructor() {
        super()
        this.state = {
            media: [],
            captions: [],
            caseArr: [],
            indCase: {},
        }

    }
    componentWillMount() {
        Axios.get('/cases').then(res => {
            
            this.setState({
                caseArr: res.data
            })
            this.setState({
                indCase: res.data[0]
            })
        }).catch(err => console.log('NOOOOOO!!!!', err))
        Axios.get('/media/1').then((res) => {
            console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/1').then((res) => {
            console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <TopArea
                    indCase={this.state.indCase}
                    secDivLeftColor={''}
                    secDivRightColor={'rgb(252, 228, 115)'}
                />
                <OneThird />
                <OneThird />
                <OneThird />
                <OneThird />
                <Full />
                <OneThird />
                <Half />
                <Half />
                <Full />
                <OneThird />
            </div>
        )
    }

}