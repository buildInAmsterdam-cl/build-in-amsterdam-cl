import React from 'react'
import Axios from 'axios';


export default function Edit(props){
    console.log('clicked edit')
    return(
    <div>
        <button onClick={() => Axios.put(`/updatecase/${props.id}`, {title: props.newTitle, subtitle: props.newSubtitle, brand: props.newBrand}).then(res => console.log(res))}>Edit</button>
    </div>
    )
}