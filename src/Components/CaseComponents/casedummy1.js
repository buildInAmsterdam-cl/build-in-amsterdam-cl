import React, { Component } from 'react';
import axios from 'axios';
import Toparea from '../Sections/TopArea';

class casedummy1 extends Component {
constructor(props){
    super(props)
    this.state = {
        caseArr: [],
        indCase: {},
        mediaStuff: [],
    }
}
    componentDidMount() {
       

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
            <Toparea 
            indCase={this.state.indCase}
            secDivLeftColor={''}
            secDivRightColor={'rgb(252, 228, 115)'}
            />
                {/* {rendTop} */}
            </div>
        )
    }
}
export default casedummy1;