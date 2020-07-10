import React from 'react';
import IconSettings from '../Icons/Settings';
import IconQuestion from '../Icons/Questions';
import IconExit from '../Icons/Exit';
import './Header.scss';
import Burger from "../Burger/Burger";

const Header = ()=>{
    return(
        <div className="Header">
            <div className="Header__inner">
                <div className="Header__left">
                    <Burger/>
                    <div className="Header__text">
                        <p>ООО  “Ромашка обыкновенная”</p>
                        <p>ИНН 1234567890</p>
                    </div>
                    <div className="Header__settings">
                        <a href="/#">
                            <IconSettings />
                        </a>
                    </div>
                </div>
                <div className="Header__right">
                    <a href="/#" className="Header__question">
                        <IconQuestion />
                    </a>
                    <a href="/#" className="Header__exit">
                        <IconExit />
                        <span>
                            Выйти
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Header;
