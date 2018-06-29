import React, { Component } from 'react';
import TopArea from '../Sections/TopArea'
import Axios from 'axios';

import FullImage from '../Sections/FullImage/FullImage';

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
        let url = '';
        if(this.state.media.length !== 0){
            url = this.state.media[mediaId].media_url
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

            {/* <FullImage imageProp={'http://www.buildinamsterdam.com/app/uploads/2017/07/Image-2500x0-c-default.jpg'} /> */}
            <FullImage imageProp={url} />

        </div>
        )
    }

}

