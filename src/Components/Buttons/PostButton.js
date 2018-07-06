import React from 'react'
import Axios from 'axios';


export default function Post(props){
    console.log(props)
    return(
    <div>
        <button onClick={() => Axios.post(`/newcase/`).then(res => props.addFalse)}>Post</button>
    </div>
    )
}