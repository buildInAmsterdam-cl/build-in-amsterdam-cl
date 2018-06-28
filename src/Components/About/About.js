import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './About.css'

class About extends Component {

    render() {
        return (
            <div className='mainBoxAbout' >
                <div className='leftSideTopSlideAbout borderBuild' >
                    <Parallax
                        blur={0}
                        // bgImage={require(aboutImg1)}
                        // bgImage={aboutImg1}
                        bgImage={'http://www.buildinamsterdam.com/app/uploads/2015/10/about-cover1.jpg'}
                        bgImageAlt="the cat"
                        strength={200}
                    >
                        <div style={{ height: '1200px' }} />
                    </Parallax>
                </div>
                <div className='rightSideTextTopAbout borderBuild' >
                    <h1 className='titleHeadAbout' >We are a branding agency specialised in e-commerce</h1>
                    <div>
                    
                    <div>
                    <p>We combine strategy, branding and e-commerce to bridge the gap betwen digital and physical touch points.</p>

                    <p>We see e-commerce platforms as digital flagship stores. So we intentionally develop platforms as brand experiences that inspire, engage, and convert in an infinite loop.</p>
                        
                    </div>

                    <div>
                    <h2>Winner E-commerce Site of the Year Award 2016 & 2017</h2>

                    <a >See all awards</a>

                    </div>

                    </div>
                </div>
                {/* <h1>About</h1> */}
            </div>
        )
    }
}

export default About;