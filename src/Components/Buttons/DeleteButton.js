import React from 'react'
import Axios from 'axios';
//


export default function Delete(props){
    console.log('clicked delete')
    return(
    <div>
        <button style={{color: '#fff', fontFamily: 'circular, sans-serif', fontSize: '.7em', marginTop: '1em', letterSpacing:'.1em'}} onClick={() => Axios.delete(`/deletecase/${props.id}`).then(res => console.log(res))}>Delete</button>
    </div>
    )
}