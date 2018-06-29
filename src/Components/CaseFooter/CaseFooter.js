import React from 'react';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';


export default function CaseFooter() {
    return (
        <div className="footer">
            <div className='left_arrow'>
                <LeftArrow/>
            </div>
            <div className='right_arrow'>
                <RightArrow/>
            </div>
        </div>
    )
}