import React from 'react'
import Axios from 'axios';


export default function Post(){
    console.log('clicked post')
    return(
    <div>
        <button onClick={() => Axios.post(`/newcase/`).then(res => console.log(res))}>Post</button>
    </div>
    )
}