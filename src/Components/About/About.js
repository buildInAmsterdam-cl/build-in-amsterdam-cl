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
                <div className='about-text'>
                    <div className='rightSideTextTopAbout' >
                        <h1 className='titleHeadAbout' >We are a branding agency specialised in <br />e-commerce.</h1>
                        <div className="strategy-contain">
                            <div className="strategy">
                                <p>We combine strategy, branding and <br /> e-commerce to bridge the gap betwen digital and physical touch points.</p>
                                <br />
                                <p>We see e-commerce platforms as digital flagship stores. So we intentionally develop platforms as brand experiences that inspire, engage, and convert in an infinite loop.</p>
                            </div>
                            <div className="strategy">
                                <h2>Winner E-commerce Site of the Year Award 2016 & 2017</h2>
                                <a >See all awards</a>
                            </div>
                        </div>
                    </div>
                    <div className='size-about'>
                        <div className='about us'>
                            <div><h1>What we are about</h1></div>
                            <div className='about-content'>
                                <p>We aim to set the industry benchmark for every client we work with. Our purpose is to build brands through profound design aesthetics that let our clients build their brand in a distinctive way.</p>
                                <p>We are a bonded group of international strategic thinkers, design fanatics and tech enthusiasts who constantly challenge each other to create work that outsmarts the speed of the Internet, beats the standard, and inspires real people.</p>
                            </div>
                        </div>
                    </div>
                    <div className='size-about'>' <div className='about do'>
                        <div><h1>What we do</h1></div>
                        <div className='about-content'>
                            <h2>Strategy</h2>
                            <p>Great experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
                            <h2>Branding</h2>
                            <p>Simplicity means clarity. We believe branding should be aesthetic, simplifying, intuitive and always underpinned by a rationale. Once we have defined the brand rationale, we translate our builds on to all desired touch points, both online and offline.</p>
                            <h2>E-commerce</h2>
                            <p>Our work is about conversion, but always in balance with the brand. We strive to make the backend solid as a rock and the content management system dummy proof. We prefer WordPress / WooCommerce, but other systems on the market hold no secrets for us.</p>
                        </div>
                    </div>

                    </div>
                </div>
                <div className='about builders'>
                    <div><h1>The <br /> Builders</h1></div>
                </div>
                <div className='brands'>
                    <div className='brand-title'><h1>We work with brands <br />we believe in</h1>
                    </div>
                    <div></div>
                      <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/adidas.jpg" alt="Adidas" /></div>  
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/openwear.jpg" alt="Openwear" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/sleeper.jpg" alt="Sleeper" /></div> 
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/franshals.jpg" alt="Frans Hals Museum" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/novis.jpg" alt="Novis" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/mendo.jpg" alt="Mendo" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-02-1.jpg" alt="ETQ." /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-04.jpg" alt="I amsterdam." /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Schiphol_v21.jpg" alt="Shiphol Amsterdam Airport" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-01.jpg" alt="Nike" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Protest_v4.jpg" alt="Protest" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/thecoldpressedjuicery.jpg" alt="The Cold Pressed Juicery" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/eginstill_v31.jpg" alt="Eginstill" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-03.jpg" alt="A-dam" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/canorfineart_v3.jpg" alt="Cantor Fine Art" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/abel_v2.jpg" alt="Abel" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Trefecta_v2.jpg" alt="Trefecta" /></div>
             <div className='brandIcons'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/high45_V2.jpg" alt="High 45" /></div>
                </div>
            </div>
        )
    }
}

export default About;