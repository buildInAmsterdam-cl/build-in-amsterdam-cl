import React from 'react';

import './TwoThirdsImage.css'
//need to conditionally render the image stying. If image height meets or exceeds outer div height, 
//style to crop, otherwise style to keep the image size as-is and center it in the div.

export default function TwoThirdsImage(props){
    // console.log(props.media1.cases_id);
    // console.log(props.media1.media_url.split('/'))
    // console.log(mediaUrlArrayed[mediaUrlArrayed.length -1] === 'logo.png' || mediaUrlArrayed[mediaUrlArrayed.length -1] === 'Logo.png')
    // console.log(mediaUrlArrayed[mediaUrlArrayed.length -1].includes('logo') || mediaUrlArrayed[mediaUrlArrayed.length -1].includes('Logo'))    
    let mediaUrlArrayed = props.media1.media_url.split('/');
    let resizer = '';    
    if(mediaUrlArrayed[mediaUrlArrayed.length -1].includes('logo') || mediaUrlArrayed[mediaUrlArrayed.length -1].includes('Logo')){
        resizer = 'twoThirdsImageResizeLogo'
    } else if (mediaUrlArrayed[mediaUrlArrayed.length -1].includes('icons') || mediaUrlArrayed[mediaUrlArrayed.length -1].includes('Icons')) {
        resizer = 'twoThirdsImageResizeIcons'
    } else if (mediaUrlArrayed[mediaUrlArrayed.length -1].includes('Box-of-Boxers')) {
        resizer = 'boxerImageResize' //This one totally is just to style the one image on the boxer page. Not very uniform code, but the rest are pretty good.
    } else {
        resizer = 'twoThirdsImageResize'
    }
    let caseNumArrCall = props.media1.cases_id - 1;
    const customBackground = ['rgb(252, 228, 115)','#171719','','#171719','#171719','rgb(251, 249, 246)','#ED5965','','','','','','']
    return (
        <div className='twoThirdsImageMain' style={{background: customBackground[caseNumArrCall]}}>
            <img className={resizer} src={props.media1.media_url} alt='' />
        </div>
    )
}