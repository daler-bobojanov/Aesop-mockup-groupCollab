import React from 'react';
import './styles/DalerComponent2.css';
import Aesop1 from '../assets/images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png';
import Aesop2 from '../assets/images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png';
import Aesop3 from '../assets/images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png';

const DalerComponent2 = () => {
    return (
        <React.Fragment>
            <div className='grid-container1'>
                <div className='container1-child'>
                    <p>Fragrance</p>
                    <h2>An aromatic signature</h2>
                    <p>Our bold, sophisticated fragrances-from Parfum and Eau de Parfum to Room Sprays-are meticulously crafted using high-quality ingredients.</p>
                </div>

                <img src={Aesop1} alt='Aesop-Home-Room-Spray-Istros-100mL-large' />
                <img src={Aesop2} alt='Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large' />
                <img src={Aesop3} alt='Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large' />
            </div>

            <div className='grid-container2'>
                <div className='container2-child'></div>
                <div className='container2-child'>
                    <h5>Istros Aromatique Room Spray</h5>
                    <p>Enlivening florals; smoky Tobacco</p>
                </div>


                <div className='container2-child'>
                    <h5>Tacit Eau de Parfum</h5>
                    <p>Basil Grand Vert, fresh citrus notes</p>
                </div>


                <div className='container2-child'>
                    <h5>Isabelle Oil Burner Blend</h5>
                    <p>Stimulating scents of Spearmint, Rose</p>
                </div>
            </div>

        </React.Fragment>


    );
}

export default DalerComponent2;