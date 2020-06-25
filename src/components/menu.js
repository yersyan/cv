import React from "react";
import style from "../css/header.module.css"
import {AiOutlineHome, BsFillBagFill, FaBook, FaHatCowboy} from "react-icons/all";
import {faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

export const Menu = () => {
    return <ul className={style.mainMenu}>
        <li className={style.active}>
            <NavLink to="/home" className={style.navAnim}>
                <AiOutlineHome className={style.menuIcon}/>
                <span className={style.linkText}>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" className="navAnim">
                <FontAwesomeIcon icon={faUser} className={style.menuIcon}/>
                <span className={style.linkText}>About Me</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/resume" className="navAnim">
                <FaHatCowboy className={style.menuIcon}/>
                <span className={style.linkText}>Resume</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/portfolio" className="navAnim">
                <BsFillBagFill className={style.menuIcon}/>
                <span className={style.linkText}>Portfolio</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/blog" className="navAnim">
                <FaBook className={style.menuIcon}/>
                <span className={style.linkText}>Blog</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="navAnim">
                <FontAwesomeIcon icon={faEnvelope} className={style.menuIcon}/>
                <span className={style.linkText}>Contact</span>
            </NavLink>
        </li>
    </ul>
}