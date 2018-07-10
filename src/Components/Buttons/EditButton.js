import React from 'react'
import Axios from 'axios';


export default function Edit(props){
    console.log('clicked edit')
    return(
    <div>
        <button style={{color: 'white', fontFamily: 'circular, sans-serif', fontSize: '.7em', marginTop: '1em', letterSpacing:'.1em'}} onClick={() => Axios.put(`/updatecase/${props.id}`, {title: props.newTitle, subtitle: props.newSubtitle, brand: props.newBrand}).then(res => console.log(res))}>Make Changes</button>
    </div>
    )
}