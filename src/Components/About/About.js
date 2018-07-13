import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './About.css';
import BuildersCarousel from './BuildersCarousel';
import MetaTags from 'react-meta-tags';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {

    render() {
        return (

            <div className='mainBoxAbout' >
                <MetaTags>
                    <title>BiA - About</title>
                    <meta id="meta-description" name="description" content="Some description." />
                    <meta id="og-title" property="og:title" content="MyApp" />
                </MetaTags>
                <div className='about-text'>
                    <div className='leftSideTopSlideAbout' >
                        <Parallax
                            blur={0}
                            // bgImage={require(aboutImg1)}
                            // bgImage={aboutImg1}
                            bgImage={'http://www.buildinamsterdam.com/app/uploads/2015/10/about-cover1.jpg'}
                            // bgHeight='1200px'
                            // bgWidth='30vw'
                            bgImageAlt="the cat"
                            strength={500}
                            bgStyle={{ overflow: 'hidden' }}
                        >
                            <div style={{ height: '1080px', overflow: 'hidden' }} />
                        </Parallax>
                    </div>

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
                        <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                                <div><h1>What we are about</h1></div>
                        </ScrollAnimation>
                                <div className='about-content'>
                        <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                                    <p>We aim to set the industry benchmark for every client we work with. Our purpose is to build brands through profound design aesthetics that let our clients build their brand in a distinctive way.</p>
                                    <p>We are a bonded group of international strategic thinkers, design fanatics and tech enthusiasts who constantly challenge each other to create work that outsmarts the speed of the Internet, beats the standard, and inspires real people.</p>
                        </ScrollAnimation>
                                </div>
                            </div>
                    </div>
                    <div className='size-about'>'
                            <div className='about do'>
                            <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                                <div><h1>What we do</h1></div>
                        </ScrollAnimation>
                                <div className='about-content'>
                            <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                                    <h2>Strategy</h2>
                                    <p>Great experiences occur when relevance, insight, and vision meet. Working side by side with our clients, and based on a deep and thorough understanding of their business and challenges, we help them get perspective, take action and be successful in an ever-changing world.</p>
                        </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                                    <h2>Branding</h2>
                                    <p>Simplicity means clarity. We believe branding should be aesthetic, simplifying, intuitive and always underpinned by a rationale. Once we have defined the brand rationale, we translate our builds on to all desired touch points, both online and offline.</p>
                        </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                                    <h2>E-commerce</h2>
                                    <p>Our work is about conversion, but always in balance with the brand. We strive to make the backend solid as a rock and the content management system dummy proof. We prefer WordPress / WooCommerce, but other systems on the market hold no secrets for us.</p>
                        </ScrollAnimation>
                                </div>
                            </div>

                    </div>
                </div>
                <div className='builders'>
                    <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                        <div><h1>The <br /> Builders</h1></div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn' duration='1' >
                        <div><BuildersCarousel /></div>
                    </ScrollAnimation>
                </div>
                <div className='brands'>
                <div className='brand-title'>
                   
                    <ScrollAnimation animateIn='fadeInUp' duration='.45' >
                        <h1>We work with brands <br />we believe in</h1>
                    </ScrollAnimation>
                   
                    </div>
                    <div></div>
                   
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/adidas.jpg" alt="Adidas" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/openwear.jpg" alt="Openwear" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/sleeper.jpg" alt="Sleeper" /></ScrollAnimation></div>
                   
                   
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/franshals.jpg" alt="Frans Hals Museum" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/novis.jpg" alt="Novis" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/mendo.jpg" alt="Mendo" /></ScrollAnimation></div>
                   
                   
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-02-1.jpg" alt="ETQ." /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-04.jpg" alt="I amsterdam." /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Schiphol_v21.jpg" alt="Shiphol Amsterdam Airport" /></ScrollAnimation></div>
                   
                   
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-01.jpg" alt="Nike" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Protest_v4.jpg" alt="Protest" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/thecoldpressedjuicery.jpg" alt="The Cold Pressed Juicery" /></ScrollAnimation></div>
                   
                   
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/eginstill_v31.jpg" alt="Eginstill" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/logo-03.jpg" alt="A-dam" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/canorfineart_v3.jpg" alt="Cantor Fine Art" /></ScrollAnimation></div>
                   
                   
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/abel_v2.jpg" alt="Abel" /></ScrollAnimation></div>
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Trefecta_v2.jpg" alt="Trefecta" /></ScrollAnimation></div>
                   
                    <div className='brandIcons'><ScrollAnimation animateIn='fadeInUp' duration='.45' ><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/high45_V2.jpg" alt="High 45" /></ScrollAnimation></div>
                </div>
            </div>
        )
    }
}

export default About;