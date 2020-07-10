import React from "react";
import "./Footer.scss"

const Footer = ()=> {
    return (
        <div className="Footer">
            <div className="Footer__inner">
                <div className="Footer__left">
                    <p>
                        г. Москва, Пресненская наб. 6, строение 2
                    </p>
                    <p>
                        ИНН 7724451748 ОГРН 1187746779868
                    </p>
                </div>
                <div className="Footer__right">
                    <p>
                        2019 ООО "Джетленд"
                    </p>
                    <p>
                        <a href="mailto:support@jetlend.ru" className="Footer__link Footer__link_email">support@jetlend.ru</a>
                        <a href="tel:88002229332" className="Footer__link Footer__link_phone">8 800 222 9332</a>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer
