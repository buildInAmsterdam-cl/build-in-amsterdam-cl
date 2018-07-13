import React from 'react'
import Axios from 'axios';
//


export default function Delete(props){
    console.log('clicked delete')
    return(
    <div>
        <div style={{color: '#fff', fontFamily: 'circular, sans-serif', fontSize: '.7em', letterSpacing:'.1em', marginTop: '10px', marginRight: '12px'}} onClick={() => Axios.delete(`/deletecase/${props.id}`).then(res => console.log(res))}>Delete</div>
    </div>
    )
}