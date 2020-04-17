import React from 'react';
import './styles/DalerComponent4.css';
import Aesop1 from '../assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png';


const DalerComponent4 = () => {
    return (
        <React.Fragment>
            <div className='grid-container5'>
                <div className='container5-image'>
                    <img src={Aesop1} alt='Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large' />
                </div>

                <div className='container5-child1'>
                    <h2>Discover more</h2>
                    <p>Kits & duets</p>
                    <ul>
                        <li>Travel</li>
                        <li>Gift Kits</li>
                        <li>Skin</li>
                        <li>Hand & body</li>
                    </ul>
                </div>

                <div className='container5-child2'>
                    <p>Hair care</p>
                    <ul>
                        <li>Cleanse</li>
                        <li>Condition</li>
                        <li>Treat</li>
                        <li>Groom</li>
                    </ul>
                </div>
            </div>

            <div className='container5-child3'>
                <h3>'And your very flesh shall be a great poem'</h3>
                <h4>Walt Whitman</h4>
            </div>
        </React.Fragment>

    );
}

export default DalerComponent4;