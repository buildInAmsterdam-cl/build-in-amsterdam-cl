import React, { Component } from 'react';
import { caseId7Information, caseIdSampleInfo } from './CaseInfo';

import Axios from 'axios';
import TopArea from '../Sections/topArea';
import FullImage from '../Sections/FullImage';
import OneHalfImage from '../Sections/OneHalfImage';
import TwoThirdsImage from '../Sections/TwoThirdsImage';
import OneThirdCapt from '../Sections/OneThirdCapt';
import OneThirdCaptPic from '../Sections/OneThirdCaptPic';
import ColorPicker from '../Sections/ColorPicker';
import OneFullFontGrid from '../Sections/OneFullFontGrid';

export default class CaseCreator extends Component {
    constructor() {
        super()

        this.state = {
            case: ['case'],
            media: ['media'],
            captions: ['captions']
        }

    }

    componentDidMount() { //WHY component Will mount (about to be deprecated)? Why not component did mount OR Drew said something about putting it in the constructor.....have to ask more about that later
        Axios.get('/cases').then(res => {
            this.setState({
                case: res.data[6]
            })
        })

        Axios.get('/media/7').then((res) => {///replace w variables passed in through props
            console.log(res)
            this.setState({
                media: res.data
            })
        })

        Axios.get('/captions/7').then((res) => {
            console.log(res)
            this.setState({
                captions: res.data
            })
        })
    }

    //does a loop over the array to check what type of component it's going to return
    //"if" one type of component, returns matching component type, including needed media props (if (ele.componentType === OneThirdCaptPic){return <OneThirdCaptPic media={} captions={}/>} else if ().....)
    //to get the correct media, you check which type of component is in use, take as many media as you need from mapping over media on state
    //(find out how many media you need with ele.numberOfMedia and ele.captionsId)
    //if there's a way to take the media out of the media array once it has been used, that would be awesome, 
    //otherwise you should increment by a (variable) number, that increments as it loops

    render() {
        console.log(this.state.captions, "this is state")
        let componentStructure = caseId7Information.map((ele, i) => {//creates an array of the component types
            if (ele.componentType === 'OneThirdCaptPic' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                console.log(this.state.captions)
                let mediaIndex1 = this.state.media.findIndex(e => { return e.media_id === ele.mediaId[0] })
                let captionsIndex1 = this.state.captions.findIndex(e => { return e.caption_id === ele.captionsId[0] })
                console.log(captionsIndex1)
                return (
                    <div><OneThirdCaptPic media1={this.state.media[mediaIndex1]} caption1={this.state.captions[captionsIndex1]} /></div>
                )
            } else if (ele.componentType === 'OneThirdCapt' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                let captionsIndex1 = this.state.captions.findIndex(e => { return e.caption_id === ele.captionsId[0] })
                return (
                    <div><OneThirdCapt caption1={this.state.captions[captionsIndex1]} /></div>
                )
            } else if (ele.componentType === 'OneFullFontGrid' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                let mediaIndex1 = this.state.media.findIndex(e => { return e.media_id === ele.mediaId[0] })
                let mediaIndex2 = this.state.media.findIndex(e => { return e.media_id === ele.mediaId[1] })
                let mediaIndex3 = this.state.media.findIndex(e => { return e.media_id === ele.mediaId[2] })
                let captionsIndex1 = this.state.captions.findIndex(e => { return e.caption_id === ele.captionsId[0] })
                let captionsIndex2 = this.state.captions.findIndex(e => { return e.caption_id === ele.captionsId[1] })
                let captionsIndex3 = this.state.captions.findIndex(e => { return e.caption_id === ele.captionsId[2] })
                console.log(this.state.captions)
                console.log(captionsIndex1, captionsIndex2, captionsIndex3)
                return (
                    <div><OneFullFontGrid 
                        media1={this.state.media[mediaIndex1]}
                        media2={this.state.media[mediaIndex2]}
                        media3={this.state.media[mediaIndex3]}
                        caption1={this.state.captions[captionsIndex1]}
                        caption2={this.state.captions[captionsIndex2]}
                        caption3={this.state.captions[captionsIndex3]}
                    /></div>
                )
            }
            else if (ele.componentType === 'FullImage' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                // console.log(ele.mediaId[0], this.state.media)
                let mediaIndex1 = this.state.media.findIndex(e => {
                    // console.log(e.media_id, ele.mediaId[0])
                    return e.media_id === ele.mediaId[0]
                })
                // console.log(mediaIndex1)
                // console.log(this.state.media[mediaIndex1])
                return (
                    <div><FullImage media1={this.state.media[mediaIndex1]} /></div>
                )
            } else if (ele.componentType === 'OneHalfImage' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                let mediaIndex1 = this.state.media.findIndex(e => { return e.media_id === ele.mediaId[0] })
                return (
                    <div><OneHalfImage media1={this.state.media[mediaIndex1]} /></div>
                )
            }
            else if (ele.componentType === 'TwoThirdsImage' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                let mediaIndex1 = this.state.media.findIndex(e => { return e.media_id === ele.mediaId[0] })
                return (
                    <div><TwoThirdsImage media1={this.state.media[mediaIndex1]} /></div>
                )
            } else if (ele.componentType === 'ColorPicker' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                let captionsIndex1 = this.state.captions.findIndex(e => { return e.caption_id === ele.captionsId[0] })
                return (
                    <div><ColorPicker caption1={this.state.captions[captionsIndex1]} /></div>//needs a hardcoded colorpicker image
                )
                //  } else if (ele.componentType === 'TwoThirdsIPad' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                //     let mediaIndex1 = this.state.media.findIndex(e=>{return e.media_id===ele.mediaId[0]})
                //      return (
                //          <div><TwoThirdsIPad media1={this.state.media[mediaIndex1]}/></div>
                //      )
                //  } else if (ele.componentType === 'FullGrid6PicsInIcons' && this.state.media[0] !== 'media' && this.state.captions[0] !== 'captions') {
                //     let mediaIndex1 = this.state.media.findIndex(e=>{return e.media_id===ele.mediaId[0]})
                //     let mediaIndex2 = this.state.media.findIndex(e=>{return e.media_id===ele.mediaId[1]})
                //     let mediaIndex3 = this.state.media.findIndex(e=>{return e.media_id===ele.mediaId[2]})
                //     let mediaIndex4 = this.state.media.findIndex(e=>{return e.media_id===ele.mediaId[3]})
                //     let mediaIndex5 = this.state.media.findIndex(e=>{return e.media_id===ele.mediaId[4]})
                //     let mediaIndex6 = this.state.media.findIndex(e=>{return e.media_id===ele.mediaId[5]})
                //  return (
                //      <div><FullGrid6PicsInIcons media1={this.state.media[ele.mediaId[0]]} 
                //                                 media2={this.state.media[ele.mediaId[1]]} 
                //                                 media3={this.state.media[ele.mediaId[2]]} 
                //                                 media4={this.state.media[ele.mediaId[3]]} 
                //                                 media5={this.state.media[ele.mediaId[4]]} 
                //                                 media6={this.state.media[ele.mediaId[5]]}/></div>
                //  )
            }

        })



        return (
            <div>
                <TopArea indCase={this.state.case}/>
                <div> {componentStructure}</div>
            </div>
        )
    }

}