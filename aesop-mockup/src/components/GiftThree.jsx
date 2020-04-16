import React from 'react';
import GiftThreeComponent from './GiftThreeComponent';
import './styles/GiftThree.css';
import Logo from '../assets/images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';
import Logo1 from '../assets/images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png';
import Logo2 from '../assets/images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png';
import Logo3 from '../assets/images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';
import Logo4 from '../assets/images/for_all_products/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png';

export default function GiftThree() {
    return (
        <div>
            <div className='mainContainer'>
                <div className="firstColumn">
                    <div className="firstColumn_top">
                        <p>Nurturing formulations</p>
                        <p>For all ages, genders and <br/> skin types </p>
                        <p>Healthy skin is a product of careful <br/> cleansing, nourishing hydration and <br/> protection against environmental <br/> factors. </p>
                    </div>
                    <div className="firstColumn_bottom">
                        <p>See all Skin Care</p>
                    </div>
                </div>
                <GiftThreeComponent
                    logo={Logo}
                    info='Parsley Seed Anti-Oxidant Serum'
                    info2= 'Perfect for use in humid climates'
                    />
                <GiftThreeComponent 
                    logo={Logo1}
                    info='Mandarin Facial Hydrating Cream'
                    info2= 'Rapidly absorbed, lightly hydrating'
                    />
                <GiftThreeComponent
                    logo={Logo2} 
                    info='Fabulous Face Oil'
                    info2= 'Softens, nourishes and balances skin'
                    />
                <GiftThreeComponent
                    logo={Logo3}
                    info='Parsley Seed Facial Cleanser'
                    info2= 'For those in polluted urban environments'
                    />
                <GiftThreeComponent
                    logo={Logo4}
                    info='B Tea Balancing Toner'
                    info2= 'Particularly suited to sensitive skin'
                    />
                
            </div>
            <hr/>
        </div>
    )
}
