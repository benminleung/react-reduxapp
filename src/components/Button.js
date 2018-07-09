import React from 'react';
import { Link } from 'react-router-dom';
import { navDir } from './navDir';
import './Button.css'

export const Button = (props) => {

    return (
        <Link 
            className={buttonType(props.type)}
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
    type: '',
}

const buttonType = (type) => {
    switch(type) {
        case 'alert':
            return 'Button ButtonAlert';
        case 'neutral':
            return 'Button ButtonNeutral';
        case 'amber':
            return 'Button ButtonAmber';
        default:
            return 'Button ButtonDefault';
    }
}

// const style = {
//     default: {
//         display: 'block',
//         padding: '1em 0em',
//         width: '12em',
//         textAlign: 'center',
//         backgroundColor: '#00AFF2',
//         color: 'inherit',
//         border: '1px solid #00AFF2',
//         textDecoration: 'none',
//         borderRadius: '5px',
//         boxShadow: 'var(--shadow)',
//     },
//     hover: {

//     }
// }