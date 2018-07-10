import React, { Component } from 'react';
import Slider from "react-slick";
import './BuildersCarousel.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            // dots: true,
            arrows: true,
            appendArrows: `${<div className="slider-arrows"></div>}`,
            infinite: false,
            speed: 700,
            slidesToShow: 2,
            slidesToScroll: 1, 
            edgeFriction: .1
        };
        return (
            <div className='slider'>
                <Slider {...settings}>
                    <div className='slick-slide'>
                       <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Daan.jpg" alt="Daan" /></div> 
                        <div className ='name-tag'><p><strong>Daan Klaver</strong> Creative Director</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Tim.jpg" alt="Tim" /></div>
                        <div className ='name-tag'><p><strong>Tim Weers</strong>  Managing Director</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Maikel.jpg" alt="Maikel" /></div>
                        <div className ='name-tag'><p><strong>Maikel van der Zande</strong> Technical Director</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                       <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Jer.jpg" alt="Jer" /></div>
                        <div className ='name-tag'><p><strong>Bernard Visscher</strong>  Senior developer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                       <div className='slide-img-sizer'> <img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Julian-1.jpg" alt="Julian" /></div>
                        <div className ='name-tag'><p><strong>Julian Mollema</strong>  Designer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Margot.jpg" alt="Margo" /></div>
                        <div className ='name-tag'><p><strong>Margot Gabel</strong>  Designer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Jerry.jpg" alt="Jerry" /></div>
                        <div className ='name-tag'><p><strong>Jer Bührman</strong>  Designer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Eliza.jpg" alt="Eliza" /></div>
                        <div className ='name-tag'><p><strong>Eliza Dunajska</strong> Designer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Jesper.jpg" alt="Jesper" /></div>
                        <div className ='name-tag'><p><strong>Jesper Vos</strong> Developer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                       <div className='slide-img-sizer'> <img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Kolin.jpg" alt="Kolin" /></div>
                        <div className ='name-tag'><p><strong>Kolin Weidmann</strong> Developer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                        <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Dion.jpg" alt="Dion" /></div>
                        <div className ='name-tag'><p><strong>Dion Pieters</strong> Developer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                       <div className='slide-img-sizer'><img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Ralph.jpg" alt="Ralph" /></div>
                        <div className ='name-tag'><p><strong>Ralph Edelstein</strong> Copy Writer</p><strong></strong> </div>
                    </div>
                    <div className='slick-slide'>
                       <div className='slide-img-sizer'> <img src="http://www.buildinamsterdam.com/app/uploads/2015/10/Marco.jpg" alt="Marco" /></div>
                        <div className ='name-tag'><p><strong>Marco Hadders</strong>  Chief Financial Officer</p><strong></strong> </div>
                    </div>
                </Slider>
            </div>
        );
    }
}