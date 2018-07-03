import React, { Component } from 'react';

import './Contact.css'

class Contact extends Component {

    render() {
        return (
            <div className='contactMainBox'>
                <div className='leftContactPicBox'></div>
                <div className='rightContactInfo'>
                    <div className='infoBox'>
                        <div className='contactBox'>
                            <h1 className='contactText'>Contact</h1>
                        </div>
                        <h3 className='headerTitlesCont'>Email</h3>
                        <div className=''>
                            <a className='aTagStyle underlineContact'
                                href='mailto:hello@buildinamsterdam.com'
                                target="_blank"
                                rel="noopener noreferrer">hello@buildinamsterdam.com</a>
                        </div>
                        <br />
                        <h3 className='headerTitlesCont'>Jobs</h3>

                        <a className='aTagStyle underlineContact'
                            href='mailto:jobs@buildinamsterdam.com'
                            target="_blank"
                            rel="noopener noreferrer">jobs@buildinamsterdam.com</a>

                        <br /><br />
                        <h3 className='headerTitlesCont'>Telephone</h3>

                        <a className='aTagStyle underlineContact'
                            href='tel:+31202230066'
                            target="_blank"
                            rel="noopener noreferrer">+31 (0)20 223 00 66</a>

                        <br /><br />
                        <h3 className='headerTitlesCont'>Address</h3>

                        <a className='aTagStyle'
                            href='https://www.google.nl/maps/place/Build+in+Amsterdam/@52.3759238,4.8704383,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609d9a6054c83:0x71e439bc1351f1b5!8m2!3d52.3759238!4d4.872627'
                            target="_blank"
                            rel="noopener noreferrer">Rombout Hogerbeetsstraat 109-1<br />
                            1052 VW Amsterdam, <br /> The Netherlands</a>

                        <br /><br />
                        <h3 className='headerTitlesCont'>Social</h3>

                        <a className='aTagStyle underlineContact spacer'
                            href='https://www.facebook.com/buildinamsterdam'
                            target="_blank"
                            rel="noopener noreferrer">Facebook</a><br />

                        <a className='aTagStyle underlineContact spacer'
                            href='https://www.instagram.com/buildinamsterdam/'
                            target="_blank"
                            rel="noopener noreferrer">Instagram</a><br />

                        <a className='aTagStyle underlineContact'
                            href='https://twitter.com/buildinams'
                            target="_blank"
                            rel="noopener noreferrer">Twitter</a>
                        <br /><br />
                    </div>

                </div>

            </div>
        )
    }
}

export default Contact;