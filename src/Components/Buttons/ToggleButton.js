import React from 'react'
import Axios from 'axios';


export default function ToggleButton(props){
    return(
    <div>
        <button onClick={() => props.toggleFuntion()}>Post</button>
    </div>
    )
}