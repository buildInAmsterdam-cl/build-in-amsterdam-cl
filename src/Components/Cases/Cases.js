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
        console.log(this.state.casesData, 'cases much?')

        let casesSlideshow = this.state.casesData ? this.state.casesData.map((cases, i) => {
            return (
                <div key={i} className='content'>
                    <div className='case_item'>
                        <div className='images'>
                            <img src={cases.background_url} />
                        </div>
                        <span className='case_header'>
                            <h2>{cases.title}</h2>
                            <p>{cases.subtitle}</p>
                        </span>
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

