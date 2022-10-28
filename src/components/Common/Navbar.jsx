/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import navLinkData from "../../data/navLinkData";
import i18next from "i18next";
import Logo from "../Common/Logo";

const Navbar = ({ t }) => {
    const onClick = (lang) => {
        i18next.changeLanguage(lang);
        const currentLang = document.getElementById("currentLang");
        const tr = document.getElementById("tr");
        const en = document.getElementById("en");
        tr.removeAttribute("class");
        en.removeAttribute("class");
        if(lang === "tr")
        {
            currentLang.innerHTML = "TR";
            tr.classList.add("uk-active");
        } else {
            currentLang.innerHTML = "EN";
            en.classList.add("uk-active");
        }
    };
    return (
        <header className="navbar-bg" data-uk-sticky>
            <nav className="uk-container uk-container-xlarge uk-navbar-sticky uk-position-relative" data-uk-navbar data-uk-scrollspy="cls: uk-animation-fade; delay:300;">
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item uk-padding-remove-left"><Logo icon="icon:icn-logo; ratio:0.4;"/></div>
                </div>
                <div className="uk-navbar-right uk-visible@m">
                    {navLinkData.map((navbarLink) => (
                        <div className="uk-navbar-item link" key={navbarLink._id}>
                            <Link to={navbarLink.link} className="uk-link-reset">{t(`${navbarLink.name}`)}</Link>
                        </div>
                    ))}
                    <div className="uk-navbar-item uk-padding-remove-right">
                        <a href="#" className="uk-link-reset" id="currentLang">TR</a>
                        <div className="uk-navbar-dropdown" uk-drop="pos: bottom-center;offset:25px;" style={{width:'50px'}}>
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li className="uk-active" onClick={() => onClick("tr")} type="button" id="tr"><a href="#">TR</a></li>
                                <li type="button" onClick={() => onClick("en")} id="en"><a href="#">EN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="uk-navbar-right uk-hidden@m uk-padding-remove-right">
                    <div className="uk-text-emphasis">
                        <a className="uk-link-reset uk-text-large" data-uk-icon="icon:menu; ratio: 1.5;" data-uk-toggle="target: #mobile-menu"></a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default withTranslation()(Navbar);