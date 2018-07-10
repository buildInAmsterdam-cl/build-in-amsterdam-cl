import React, { Component } from 'react';
import './Cases.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';
import DeleteButton from '../Buttons/DeleteButton'
import EditButton from '../Buttons/EditButton'
import PostButton from '../Buttons/PostButton';
import MetaTags from 'react-meta-tags'
// import { Transform } from 'stream';

export default class Cases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            casesData: [],
            admin: false,
            title: 'default',
            subtitle: 'default',
            brand: 'default',
            editable: [false, false, false, false, false, false, false],
            scrolls: 'noclick',
            i: 0
            // ['noclick', 'oneclick', 'twoclick', 'backclick']
        }
        this.toggleAdmin = this.toggleAdmin.bind(this)
        this.addFalse = this.addFalse.bind(this)
        // this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        axios.get('/cases').then(res => {
            this.setState({
                casesData: res.data,
            })
        })
        // this.setInitialState()
    }

    // setInitialState(){
    //     if (this.state.casesData.length !== 0){
    //         this.setState({
    //             title: this.casesData[0].title
    //         })
    //         return ''
    //     }
    //     else {
    //         this.setInitialState()
    //     }
    // }

    // handleScroll() {
    //     console.log(this.state.scrolls)
    //     let scrollsArray = ['oneclick', 'twoclick', 'backclick']
    //     this.setState({ scrolls: scrollsArray[this.state.i] })
    //     this.state.i++
    //     if (this.state.i === 3) {
    //         this.setState({
    //             i: 0
    //         })
    //     }
    //     console.log(this.state.scrolls, this.state.i)
    // }

    rightScroll() {
        window.scrollBy({
            top: 0,
            left: 1920,
            behavior: 'smooth'
        })
    }

    leftScroll() {
        window.scrollBy({
            top: 0,
            left: -1920,
            behavior: 'smooth'
        })
    }

    toggleAdmin() {
        this.setState({
            admin: !this.state.admin
        })
    }

    toggleEditable(num) {
        let newEditable = this.state.editable.map((ele, i) => {
            if (i === num) {
                return !ele[num]
            }
            else { return ele }
        })
        this.setState({
            editable: newEditable
        })
    }

    addFalse() {
        this.setState({
            editable: this.state.editable.push(false)
            // editable: [...this.state.editable, false]
        })
        console.log(this.state)
    }
    render() {
        //console.log(this.state.casesData, 'cases much?')

        // let rightScroll = {
        //     transform: 
        // }

        let casesSlideshow = this.state.casesData ? this.state.admin ? this.state.casesData.map((cases, i) => {
            if (!this.state.editable[i]) {
                return (<div key={i} className='contentEditor'>
                    <div className='case_item'>
                        <div className='button_group'>
                            <DeleteButton className='button' id={cases.case_id} />
                            <button style={{color: '#fff', fontFamily: 'circular, sans-serif', fontSize: '.7em', marginTop: '1em', letterSpacing:'.1em'}} onClick={() => this.toggleEditable(i)}>Edit</button>
                        </div>
                        <div className={`images images${[i]}`}>
                            <img className='pic' src={cases.background_url} alt='caseimg' />
                        </div>
                        <div className='case_header'>
                            <h1 >{cases.title}</h1>
                            <div className='blurb'><h5>{cases.subtitle}</h5></div>
                            <p>{cases.brand}</p>
                        </div>
                    </div>
                </div>)
            }
            else {
                return (
                    <div key={i} className='contentEditor'>
                        <div className='case_item'>
                            <div className='button_group'>
                                <DeleteButton className='button' id={cases.case_id} />
                                <button style={{color: '#fff', fontFamily: 'circular, sans-serif', fontSize: '.7em', marginTop: '1em'}} onClick={() => this.toggleEditable(i)}>Edit</button>
                                <EditButton style={{color: '#fff', fontFamily: 'circular, sans-serif', fontSize: '.7em', marginTop: '1em'}} className='button' newTitle={this.state.title} newSubtitle={this.state.subtitle} newBrand={this.state.brand1} id={cases.case_id} />
                            </div>
                            <div className={`images images${[i]}`}>
                                <img className='pic' src={cases.background_url} alt='caseimg' />
                            </div>
                            <div className='case_header'>
                                <textarea style={{ color: 'white' }} className='edit_input e_brand' placeholder={cases.title} onChange={(ele) => { this.setState({ title: ele.target.value }) }} /><br />
                                {/* <input className='edit_input' placeholder={cases.subtitle} onChange={(ele) => {this.setState({subtitle: ele.target.value})}}/><br/> */}
                                <input className='edit_input' placeholder={cases.brand} onChange={(ele) => { this.setState({ brand: ele.target.value }) }} />
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>


                )
            }
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
                                    <div className='blurb'><h5>{cases.subtitle}</h5></div>
                                    <p>{cases.brand}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }) : ''

        let postButton = this.state.admin ? <PostButton addFalse={this.addFalse} /> : <span />

        return (
            <div className='case_parent'>
                <MetaTags>
                    <title>BiA - Cases</title>
                    <meta id="meta-description" name="description" content="Some description." />
                    <meta id="og-title" property="og:title" content="MyApp" />
                </MetaTags>
                <button onClick={() => this.toggleAdmin()}>Toggle</button>
                {casesSlideshow}
                {postButton}
                <div className='left_arrows' onClick={() => { this.leftScroll() }}>
                    <div className='circle_left'>
                        <div className='left_drawer'>
                            <div className='left_drawer_inner'>
                                <span>Previous</span>
                            </div>
                        </div>
                        <div className='left_arrow'>

                            <LeftArrow />
                        </div>
                    </div>
                </div>
                <div className='right_arrows' onClick={() => { this.rightScroll() }}>
                    <div className='circle_right right-next'>
                        <div className='right_drawer next'>
                            <div className='right_drawer_inner'>
                                <span>More Cases</span>
                            </div>
                        </div>
                        <div className='right_arrow'>
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



