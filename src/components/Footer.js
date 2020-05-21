import React from 'react';

const d = new Date();
const y = d.getFullYear();

const Footer = () => (
    <footer>
        {/* <img src= alt="logo" /> */}
        <p>&copy; {y} Laura Beltran</p>
    </footer>
);

export default Footer;