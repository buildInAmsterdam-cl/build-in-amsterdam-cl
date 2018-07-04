import React, { Component } from 'react';
import './Cases.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';
import DeleteButton from '../Buttons/DeleteButton'
import EditButton from '../Buttons/EditButton'
import PostButton from '../Buttons/PostButton'



export default class Cases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            casesData: [],
            admin: false,
            title: 'default',
            subtitle: 'default',
            brand: 'default',
            editable: [false, false, false, false, false, false, false]
        }
    this.toggleAdmin = this.toggleAdmin.bind(this)
    this.addFalse = this.addFalse.bind(this)
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

    toggleAdmin(){
        this.setState({
            admin: !this.state.admin
        })
    }

    toggleEditable(num){
        let newEditable = this.state.editable.map((ele, i) => {
            if (i === num){
                return !ele[num]
            }
            else {return ele} 
        })
        this.setState({
            editable: newEditable
        })
    }

    addFalse(){
        this.setState({
            editable: this.state.editable.push(false)
            // editable: [...this.state.editable, false]
        })
        console.log(this.state)
    }
    render() {
        //console.log(this.state.casesData, 'cases much?')

        let casesSlideshow = this.state.casesData ? this.state.admin ? this.state.casesData.map((cases, i) => {
            console.log(this.state.editable[i])
            // this.addFalse()
            console.log(this.state)
                if (!this.state.editable[i]){
                    
                 return(   <div key={i} className='content'>
                    {/* <Link to={`/case/${cases.case_id}`} > */}
                        <div className='case_item'>
                        <div className='button_group'>
                        <DeleteButton className='button' id={cases.case_id}/>
                        {/* <EditButton className='button' id={cases.case_id} newTitle={this.state.title} newSubtitle={this.state.subtitle} newBrand={this.state.brand}/> */}
                        <button onClick={()=>this.toggleEditable(i)}>Edit</button>
                        </div>
                            <div className={`images images${[i]}`}>
                                <img className='pic' src={cases.background_url} alt='caseimg' />
                            </div>
                            <div className='case_header'>
                            <h1 >{cases.title}</h1>
                                <div className='blurb'><h5>{cases.blurb}</h5></div>
                                <p>{cases.brand}</p>
                            </div>
                        </div>
                         {/* </Link> */}     
                    </div>)
                }
                else{
                return (
                    <div key={i} className='content'>
                    {/* <Link to={`/case/${cases.case_id}`} > */}
                        <div className='case_item'>
                        <div className='button_group'>
                        <DeleteButton className='button' id={cases.case_id}/>
                        {/* <EditButton className='button' id={cases.case_id} newTitle={this.state.title} newSubtitle={this.state.subtitle} newBrand={this.state.brand}/> */}
                        <button onClick={()=>this.toggleEditable(i)}>Edit</button>
                        <EditButton className='button' newTitle={this.state.title} newSubtitle={this.state.subtitle} newBrand={this.state.brand1} id={cases.case_id}/>
                        </div>
                            <div className={`images images${[i]}`}>
                                <img className='pic' src={cases.background_url} alt='caseimg' />
                            </div>
                            <div className='case_header'>
                                <textarea style={{color : 'white'}} className='edit_input e_brand' placeholder={cases.title} onChange={(ele) => {this.setState({title: ele.target.value})}}/><br/>
                                {/* <input className='edit_input' placeholder={cases.subtitle} onChange={(ele) => {this.setState({subtitle: ele.target.value})}}/><br/> */}
                                <input className='edit_input' placeholder={cases.brand} onChange={(ele) => {this.setState({brand: ele.target.value})}}/>
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
                                <div className='blurb'><h5>{cases.blurb}</h5></div>
                                <p>{cases.brand}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }) : ''

        let postButton = this.state.admin ? <PostButton addFalse={this.addFalse}/> : <span/>
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
                    <div className='circle_right right-next'>
                        <div className='right_drawer next'>
                            <div className='right_drawer_inner'>
                               <span>More Cases</span>
                            </div>
                        </div>
                        <div className='right_arrow'>
                            <RightArrow/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


