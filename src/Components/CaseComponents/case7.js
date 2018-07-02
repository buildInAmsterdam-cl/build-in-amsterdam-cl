import React, { Component } from 'react';
import TopArea from '../Sections/topArea'
import Axios from 'axios';

import FullImage from '../Sections/FullImage/FullImage';
import OneHalfImage from '../Sections/OneHalfImage/OneHalfImage';

export default class caseJonCopy7 extends Component {
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
                indCase: res.data[6]
            })
        }).catch(err => console.log('NOOOOOO!!!!', err))

        Axios.get('/media/7').then((res) => {
            // console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/7').then((res) => {
            // console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }
    render() {
        let mediaId = this.state.media.findIndex( (val)=> val.media_id === 101)
        let mediaIdHalfPic1 = this.state.media.findIndex( (val)=> val.media_id === 110)
        let mediaIdHalfPic2 = this.state.media.findIndex( (val)=> val.media_id === 111)
        let mediaIdFull2 = this.state.media.findIndex( (val)=> val.media_id === 112)
        let url = '';
        let urlHalfPic1 = '';
        let urlHalfPic2 = '';
        let urlFullPic2 = '';
        if(this.state.media.length !== 0){
            url = this.state.media[mediaId].media_url
            urlHalfPic1 = this.state.media[mediaIdHalfPic1].media_url
            urlHalfPic2 = this.state.media[mediaIdHalfPic2].media_url
            urlFullPic2 = this.state.media[mediaIdFull2].media_url
        }
        return (
        <div>
            <TopArea
                indCase={this.state.indCase}
                secDivLeftColor={''}
                secDivRightColor={'rgb(245, 234, 175)'}
                marginsLeft={''}
            />
            <div style={{background: 'purple', minHeight: '100vw', border: 'solid black 1px'}} >Left side, 1/3rd cap pic, Right side, 2/3rd picarea </div>
            <div style={{background: 'green', minHeight: '100vw', border: 'solid black 1px'}} >full font component</div>
            <div style={{background: 'pink', minHeight: '100vw', border: 'solid black 1px'}} >color picker component</div>

            <FullImage imageProp={url} />
            <div style={{background: 'pink', minHeight: '100vh', border: 'solid black 1px'}} >left side, 1/3 capt, right side, 2/3 ipad</div>
            <div style={{background: 'teal', minHeight: '100vh', border: 'solid black 1px'}} >2/3rds grid</div>
            <div style={{background: 'gray', minHeight: '100vh', border: 'solid black 1px'}} >left side, 1/3 capt, right side, 2/3 ipad</div>
            
            <div style={{display: 'flex', flexDirection: 'row' }}>
            <OneHalfImage imageProp={urlHalfPic1} />
            <OneHalfImage imageProp={urlHalfPic2} />
            </div>
            <FullImage imageProp={urlFullPic2} />
            <div style={{background: 'purple', minHeight: '100vh', border: 'solid black 1px'}} >left side, 1/3 capt, right side, 2/3 image</div>
            <div style={{background: 'gray', minHeight: '100vh', border: 'solid black 1px'}} >left side, 1/3 capt, right side, 2/3 ipad</div>
            <div style={{background: 'green', minHeight: '100vh', border: 'solid black 1px'}} >left side, 1/3 capt with pic up top, right side, 2/3 image</div>

        </div>
        )
    }

}

