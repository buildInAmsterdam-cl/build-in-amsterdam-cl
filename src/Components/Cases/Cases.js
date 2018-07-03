import React, { Component } from 'react';
import './Cases.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';
import DeleteButton from '../Buttons/DeleteButton'
import EditButton from '../Buttons/EditButton'
import PostButton from '../Buttons/PostButton'
import ToggleButton from '../Buttons/ToggleButton'

export default class Cases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            casesData: [],
            admin: false,
            title: 'default',
            subtitle: 'default',
            brand: 'default'
        }
    this.toggleAdmin = this.toggleAdmin.bind(this)
    }

    componentDidMount() {
        axios.get('/cases').then(res => {
            this.setState({
                casesData: res.data
            })
        })
    }
    toggleAdmin(){
        this.setState({
            admin: !this.state.admin
        })
    }
    render() {
        //console.log(this.state.casesData, 'cases much?')

        let casesSlideshow = this.state.casesData ? this.state.admin ? this.state.casesData.map((cases, i) => {
            console.log(i)
            return (
                <div key={i} className='content'>
                    <EditButton id={cases.case_id} newTitle={this.state.title} newSubtitle={this.state.subtitle} brand={this.state.brand}/>
                    <DeleteButton id={cases.case_id}/>
                <Link to={`/case/${cases.case_id}`} >
                    <div className='case_item'>
                        <div className={`images images${[i]}`}>
                            <img className='pic' src={cases.background_url} alt='caseimg' />
                        </div>
                        <div className='case_header'>
                            <h1 >{cases.title}</h1>
                            <p>{cases.brand}</p>
                            <input onChange={(ele) => {this.setState({title: ele.target.value})}}/>
                            <input onChange={(ele) => {this.setState({subtitle: ele.target.value})}}/>
                            <input onChange={(ele) => {this.setState({brand: ele.target.value})}}/>
                        </div>
                        
                    </div>
                     </Link>
                        
                </div>


            )
        }) 
        : 
        
         this.state.casesData.map((cases, i) => {
            // console.log(i)
            return (
                <div className='content' key={i} >
                <Link to={`/case/${cases.case_id}`} >
                    <div className='case_item'>
                        <div className={`images images${[i]}`}>
                            <img className='pic' src={cases.background_url} alt='caseimg' />
                        </div>
                        <div className='case_header'>
                                <h1 >{cases.title}</h1>
                                <div className='blurb'><h5>{cases.blurb}</h5></div>
                                <p>{cases.brand}</p>
                        </div>
                    </div>
                    </Link>
                </div>
            )
        }) : ''

        let postButton = this.state.admin ? <PostButton/> : <span/>
        return (
            <div className='case_parent'>
            <button onClick={() => this.toggleAdmin()}>Toggle</button>
                {casesSlideshow}
            {postButton}
                <div className='left_arrows'>
                    <div className='circle_left'>
                        <LeftArrow />
                    </div>
                </div>
                <div className='right_arrows'>
                    <div className='circle_right'>
                        <RightArrow />
                    </div>
                </div>
            </div>
        )
    }


}


