import React from 'react'
import Logo from '../assets/images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png';

export default function GiftThreeComponent(props) {
    return (
        <div className = 'mainContainer_columns'>
           <img src={props.logo} alt="no image" />
           <p>{props.info}</p><p>{props.info2} </p>
        </div>
    )
}
