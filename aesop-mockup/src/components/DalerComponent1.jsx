import React from 'react';
import './style/DalerComponent1.css';
import Aesop1 from '../assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';
import Aesop2 from '../assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png';
import Aesop3 from '../assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png';

const DalerComponent1 = () => {
    return (
        <React.Fragment>
            <div className='wrapper1'>
                <div className='wrapper1-child'>
                    <p>Aesop essentials</p>
                    <h2>A selection of staples</h2>
                    <p>From beloved formulations first created decades ago to personal care necessities.</p>
                </div>

                <img className='' src={Aesop1} alt='Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large' />
                <img className='' src={Aesop2} alt='Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large' />
                <img className='' src={Aesop3} alt='Large-PNG-Aesop-Personal-Deodorant-50mL-large' />
            </div>

            <div className='wrapper2'>
                <div className='wrapper2-child'></div>
                <div className='wrapper2-child'>
                    <h5>Resurrection Aromatique Hand Wash</h5>
                    <p>Gentle cleansing for hard-working hands</p>
                </div>


                <div className='wrapper2-child'>
                    <h5>Resurrection Aromatique Hand Balm</h5>
                    <p>Richly hydrating, greaseless finish</p>
                </div>


                <div className='wrapper2-child'>
                    <h5>Deodorant</h5>
                    <p>Woody, herbaceous, earthy aromatique</p>
                </div>
            </div>

        </React.Fragment>


    );
}

export default DalerComponent1;