import React, { Component } from 'react';
import axios from 'axios';
import TopArea from '../Sections/TopArea';

class casedummy2 extends Component {
constructor(props){
    super(props)
    this.state = {
        caseArr: [],
        indCase: {},
        mediaStuff: [],
    }
}
    componentDidMount() {
        axios.get('/cases').then(res => {
            
            this.setState({
                caseArr: res.data
            })
            this.setState({
                indCase: res.data[1]
            })
        }).catch(err => console.log('NOOOOOO!!!!', err))

        axios.get(`/media/1`).then(res => {
            this.setState({
                mediaStuff: res.data
            })
        })
        
        // axios.get().then().catch()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.caseArr.length !== this.state.caseArr.length ){
    //         this.setState({
    //             caseArr: this.state.caseArr,
    //         })
    //     }
    // }
    
    render(){
        // console.log(this.props)
        // console.log(this.state.caseArr)
        return(
            <div>
            <TopArea 
            indCase={this.state.indCase}
            secDivLeftColor={''}
            secDivRightColor={'rgb(252, 228, 115)'}
            />
                {/* {rendTop} */}
            </div>
        )
    }
}
export default casedummy2;