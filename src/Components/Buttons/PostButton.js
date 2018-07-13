import React from 'react'
import Axios from 'axios';


export default function Post(props){
    console.log(props)
    return(
    <div>
        <span style={{color: '#fff', fontFamily: 'circular, sans-serif', fontSize: '.7em', letterSpacing:'.1em'}} onClick={() => Axios.post(`/newcase/`).then(res => props.addFalse)}>Post</span>
    </div>
    )
}