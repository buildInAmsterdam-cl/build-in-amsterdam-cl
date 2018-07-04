import React, { Component } from 'react';
import TopArea from '../Sections/topArea'
import Axios from 'axios';
// import { caseId1Information } from '../CaseInfo/CaseInfo';
import OneThirdCaptPic from '../Sections/OneThirdCaptPic';
import TwoThirdsImage from '../Sections/TwoThirdsImage';

export default class case1 extends Component {
    constructor() {
        super()
        this.state = {
            media: [],
            captions: [],
            caseArr: [],
            indCase: ['case'],
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
            // console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/1').then((res) => {
            // console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render() {
        // console.log('object', caseId1Information)
        // console.log('captions', this.state.captions)
        // console.log('media', this.state.media)
        let m1 = this.state.media.length !== 0 ? this.state.media[0] : '';
        let c1 = this.state.captions.length !== 0 ? this.state.captions[0] : '';
        let m2 = this.state.media.length !== 0 ? this.state.media[1] : '';
        // console.log(m1)
        return (
            <div>
                <TopArea indCase={this.state.indCase}/>
                <div style={{display: 'flex'}} >
                <OneThirdCaptPic media1={m1} caption1={c1} />
                <TwoThirdsImage media1={m2} />
                </div>
            </div>
        )
    }

}