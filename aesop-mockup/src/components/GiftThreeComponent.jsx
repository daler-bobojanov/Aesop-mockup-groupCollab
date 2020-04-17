import React from 'react'


export default function GiftThreeComponent(props) {
    return (
        <div className='mainContainer_columns'>
            <img src={props.logo} alt="no image" />
            <p>{props.info}</p><p>{props.info2} </p>
        </div>
    )
}
