import React from 'react';
import './Menu.scss';
import Logo from '../../Assets/Images/Logo.png';
import Personal from '../Personal/Personal';
import IconPhone from "../Icons/Phone";
import IconMail from "../Icons/Mail";



const Menu = ()=>{
    const toggleMenu = ()=>{
        let menu = document.querySelector('.Menu');
        let html = document.querySelector('html');
        menu.classList.remove('active');
        html.classList.remove('fixed');
    };
    return(
        <div className="Menu">
            <div className="Menu__inner">
                <div className="Close__menu" onClick={toggleMenu}>&#10006;</div>
                <div className="Menu__header">
                    <a href="/#" className="Menu__logo">
                        <img src={Logo} alt=""/>
                        <span>JetLend</span>
                    </a>
                </div>
                <div className="Menu__body">
                    <ul className="Menu__list">
                        <li className="Menu__item Menu__item_finished">
                            <a href="/#">
                                Идентификация
                            </a>
                        </li>
                        <li className="Menu__item Menu__item_active">
                            <a href="/#">
                                Документация
                            </a>
                        </li>
                        <li className="Menu__item">
                            <a href="/#">
                                Решение
                            </a>
                        </li>
                        <li className="Menu__item">
                            <a href="/#">
                                Верификация
                            </a>
                        </li>
                        <li className="Menu__item">
                            <a href="/#">
                                Перевод средств
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Menu__footer">
                    <Personal/>
                    <div className="Menu__links">
                        <a href="tel:88002229332" className="Menu__links-phone">
                            <IconPhone/>
                            <span>
                                8 (800) 222 93-32
                            </span>
                        </a>
                        <a href="mailto:support@jetlend.ru">
                            <IconMail />
                            <span>
                                support@jetlend.ru
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menu;
