import React, { Component } from 'react';
import './Cases.css';
import axios from 'axios';

export default class Cases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            casesData: []
        }
    }

    componentDidMount() {
        axios.get('/cases').then(res => {
            this.setState({
                casesData: res.data
            })
        })
    }

    render() {
        //console.log(this.state.casesData, 'cases much?')

        let casesSlideshow = this.state.casesData ? this.state.casesData.map((cases, i) => {
            return (
                <div key={i} className='content'>
                    <div className='case_item'>
                        <div className='images'>
                            <img className='pic' src={cases.background_url}  alt='caseimg'/>
                        </div>
                        <div className='case_header'>
                            <h1 >{cases.title}</h1>
                            <p>{cases.brand}</p>
                        </div>
                    </div>

                </div>
            )
        }) : ''
        return (
            <div className='case_parent'>
                    {casesSlideshow}
            </div>
        )
    }
}

