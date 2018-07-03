import React from 'react'
import Axios from 'axios';


export default function ToggleButton(props){
    return(
    <div>
        <button onClick={() => {
            console.log('clicked')
            return props.toggleFuntion()
            }}>Toggle</button>
    </div>
    )
}