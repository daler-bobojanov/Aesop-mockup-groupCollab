import React from 'react';

function Footer() {
    return (
        <div className='footer' >
            <hr/>
            <div id='left-side'>
            <p>I would like to receive communications about Aesop products, services, events and matters <br/> of cultural interest.</p>
            <input type="text" placeholder='Email adress'/>
            </div>
            <div id='right-side' >
            <p>Contact us</p>
            <ul className='contact-us' >
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Delivery and Returns</li>
                <li>Track your order</li>
                <li>Check Gift Card Balance</li>
                <li>Terms and Conditions</li>
                <li>Accesibility</li>
            </ul>
            <p>About</p>
            <ul className='about' >
                <li>Our story</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Corporate Gifts</li>
                <li>Facial appointments</li>
            </ul>
            <p>Social</p>
            <ul>
                <li>Instagram ↗</li>
                <li>Twitter ↗</li>
                <li>LinkedIn ↗</li>
            </ul>
            </div>
            <div id='right-side' >

            </div>
        </div>
    );
}

export default Footer;