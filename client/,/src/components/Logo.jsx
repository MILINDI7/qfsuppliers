import React from 'react';
import logoImage from '../assets/Logo.png';

const Logo = ({ size = 60 }) => {
    return (
        <img
            src={logoImage}
            alt="Quick Fit Logo"
            width={size}
            height={size}
            style={{
                objectFit: 'contain',
                display: 'block'
            }}
        />
    );
};

export default Logo;

