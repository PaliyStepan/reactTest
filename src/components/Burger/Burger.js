import React from "react";
import './Burger.scss'

const Burger = ()=>{
    const mobileMenuToggle = ()=>{
        let menu = document.querySelector('.Menu');
        let html = document.querySelector('html');
        menu.classList.add('active');
        html.classList.add('fixed');
    };

    return(
        <div className="Burger" onClick={mobileMenuToggle}>
            <div className="Burger__line Burger__line_top"></div>
            <div className="Burger__line Burger__line_center"></div>
            <div className="Burger__line Burger__line_bottom"></div>
        </div>
    )
};

export default Burger;
