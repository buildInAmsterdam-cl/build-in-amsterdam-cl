import React from 'react'
import Axios from 'axios';


export default function Edit(props){
    console.log('clicked edit')
    return(
    <div>
        <div style={{color: 'white', fontFamily: 'circular, sans-serif', fontSize: '.7em', letterSpacing:'.1em', marginTop: '10px', marginRight: '12px'}} onClick={() => Axios.put(`/updatecase/${props.id}`, {title: props.newTitle, subtitle: props.newSubtitle, brand: props.newBrand}).then(res => console.log(res))}>Make Changes</div>
    </div>
    )
}