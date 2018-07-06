import React from 'react';
import { Link } from 'react-router-dom';
import { navDir } from './navDir';
import './Button.css'

export const Button = (props) => {

    return (
        <Link 
            className="nextButton"
            to={props.toLink ? navDir[props.toLink] : '#'}
            onClick={props.click}
            
        >
            {props.text}

        </Link>
    )
}

Button.defaultProps = {
    click: null,
    text: 'return home',
}