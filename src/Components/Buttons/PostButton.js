import React from 'react'
import Axios from 'axios';


export default function Post(){
    return(
    <div>
        <button onClick={Axios.post(`/postcase/`).then(res => console.log(res))}>Post</button>
    </div>
    )
}