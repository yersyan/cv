import React from "react";
import mainPhoto from "../img/main_photo.jpg";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/all";
import cn from "classnames";
import style from "../css/header.module.css"
import {Menu} from "./menu";
import {Titles} from "./components";

export const Header = () => {
    return <div className={style.header}>
        <div className={style.headerContent}>
            <div className={style.headerPhoto}>
                <img src={mainPhoto} alt="Alex Smith"/>
            </div>
            <Titles title={"36px"} description={"18px"}/>
            <Menu/>
            <div className={style.socialLinks}>
                <ul>
                    <li><a href="/#" target="_blank"><FaLinkedinIn/></a></li>
                    <li><a href="/#" target="_blank"><FaFacebookF/></a></li>
                    <li><a href="/#" target="_blank"><FaTwitter/></a></li>
                </ul>
            </div>
            <div className={style.headerButtons}>
                <a href="/#" target="_blank" className={cn(style.btn, style.btnPrimary)}>Download CV</a>
            </div>
            <div className={style.copyrights}>© 2020 All rights reserved.</div>
        </div>
    </div>
}