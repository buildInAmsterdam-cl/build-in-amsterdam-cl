import React, { Component } from 'react';
import './Cases.css';

export default class Cases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cases: []
        }
    }

    // componentDidMount() {
    // axios.get('/cases').then(case => {
    // this.setState({ cases: case.data})
    // })
    // }

    // cases & media

    // showCases (users) {
    //     if (users.auth_id) {
    //         return (
    //             <div>


    //             </div>
    //         )
    //     } else {
    //         return this.state.cases.map((cases, index) => {
    //             return (
    //                 <div key={index} className='case_slider'>
    //                     <img src='http://www.bhmpics.com/wallpapers/little_pony_art-800x480.jpg'/>
    //                 </div>
    //             )
    //         })
    //     }
    // }

    showCases() {
        return (
            <figure>
                <div className='case_item'>
                    <p>Case 1</p>
                    <div className='img_box'>
                        <img src='http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg' /> 
                    </div>
                   
                </div>
                <div className='case_item'>
                    <p>Case 2</p>
                    <img src='http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg' />
                </div>
                <div className='case_item'>
                    <p>Case 3</p>
                    <img src='http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg' />
                </div>
                <div className='case_item'>
                    <p>Case 4</p>
                    <img src='http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg' />
                </div>
                <div className='case_item'>
                    <p>Case 5</p>
                    <img src='http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg' />
                </div>
                <div className='case_item'>
                    <p>Case 6</p>
                    <img src='http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg' />
                </div>
                <div className='case_item'>
                    <p>Case 7</p>
                    <img src='http://www.buildinamsterdam.com/app/uploads/2018/04/Frans-HalsH-KoosBreukelCombi_Zoom.jpg' />
                </div>
            </figure>
        )
    }

    render() {
        return (
            <div className='case_parent'>
                <div className='case_array'>
                    {this.showCases()}
                    {/* {this.state.cases ? this.showCases(this.state.cases): ''} */}

                </div>
            </div>
        )
    }
}

