import React from 'react'
import Axios from 'axios';


export default function ToggleButton(props){
    console.log(props)
    return(
    <div>
        <button onClick={() => props.toggleFuntion()}>
        Toggle
        </button>
    </div>
    )
}