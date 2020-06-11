import React from 'react';
import Burger from 'react-css-burger';

const Hamburguer = (props) => {
    
    const handleHamburgerMenu = () => {
        if (props.openMenu){
            props.setOpenMenu(false);
        }else {
            props.setOpenMenu(true); 
        }
    }
    return (
        <Burger
            onClick={handleHamburgerMenu}
            active={props.openMenu}
            burger="spin"
            color="#da9b9b"
            hoverOpacity={0.8}
            scale={0.8}
        />
    );
}

export default Hamburguer;