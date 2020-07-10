import React from "react";
import './Personal.scss'
import Man from "../../Assets/Images/man.png";
import IconWhatsup from "../Icons/Whatsup";
import IconMail from "../Icons/Mail";


const Personal = ()=>{
    return(
        <div className="Personal">
            <div className="Personal__left">
                <div className="Personal__img">
                    <img src={Man} alt="Personal"/>
                </div>
            </div>
            <div className="Personal__right">
                <div className="Personal__name">Азамат Хугаев</div>
                <div className="Personal__job">Ваш персональный
                    менеджер</div>
                <div className="Personal__contacts">
                    <a href="+7968656526" className="Personal__contacts-link">
                        <IconWhatsup />
                        <span>+7 (968) 865-65-26</span>
                    </a>
                    <a href="mailto:ak@jetlend.ru">
                        <IconMail />
                        <span>
                            ak@jetlend.ru
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Personal;

