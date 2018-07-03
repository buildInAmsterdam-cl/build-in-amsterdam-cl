import React from 'react'
import Axios from 'axios';


export default function Edit(props){
    return(
    <div>
        <button onClick={Axios.put(`/editcase/${props.id}`, [props.title, props.subtitle, props.brand]).then(res => console.log(res))}>Edit</button>
    </div>
    )
}