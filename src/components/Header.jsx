import React, {useState} from "react";
import logo from '../assets/img/magnifying_glass1.png';

const headerNav = [
    {
        title: "인트로",
        url: "#intro"
    },
    {
        title: "기능 설명",
        url: "#func"
    },
    {
        title: "인증 사이트 목록",
        url: "#card"
    },
    {
        title: "기업 제휴 문의",
        url: "#site"
    },
    {
        title: "프로필",
        url: "#site"
    },
];

const Header = () => {
    return (
        <header id="header" role="banner">
        <div className="header__inner">
            <div className="header__logo">
                <img src={logo} className="header__logo-img"/>
                <h2>딱걸렸어</h2>
            </div>
            <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                <ul>
                {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                </ul>
            </nav>
            <div 
                className="header__nav__mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                aria-expanded="false" 
                role="button" 
                tabindex="0"
            >
                <span></span>
            </div>
        </div>
    </header>
    );
};

export default Header;