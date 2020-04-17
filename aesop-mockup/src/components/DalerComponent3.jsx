import React from 'react';
import './styles/DalerComponent3.css';
import Aesop1 from '../assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png';
import Aesop2 from '../assets/images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png';
import Aesop3 from '../assets/images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png';

const DalerComponent3 = () => {
    return (
        <React.Fragment>
            <div className='grid-container3'>
                <div className='container3-child'>
                    <p>For hands and body</p>
                    <h2>Daily cleansing</h2>
                    <p>Ensure impeccable hygiene with our range of mild yet efficacious formulations.</p>
                </div>

                <img src={Aesop1} alt='Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large' />
                <img src={Aesop2} alt='Aesop-Body-Redemption-Body-Scrub-180mL-large' />
                <img src={Aesop3} alt='Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px' />
            </div>

            <div className='grid-container4'>
                <div className='container4-child'>
                    <br />
                    <p id="button">See all Body   &#8594;</p>
                </div>
                <div className='container4-child'>
                    <h5>Reverence Aromatique Hand Wash</h5>
                    <p>Woody, earthy, smoky aroma</p>
                </div>


                <div className='container4-child'>
                    <h5>Redemption Body Scrub</h5>
                    <p>Bamboo Stem and Pumice, to polish skin</p>
                </div>


                <div className='container4-child'>
                    <h5>Body Cleansing Slab</h5>
                    <p>Enriched with Bergamot Rind, Tahitian</p>
                </div>
            </div>

        </React.Fragment>

    );
}

export default DalerComponent3;