import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all";
import style from "../css/components.module.css"

export const ArrowNav = () => {
    return <div className={style.lmpixelsArrowsNav}>
        <div className={style.lmpixelsArrowRight}><IoIosArrowForward/></div>
        <div className={style.lmpixelsArrowRight}><IoIosArrowBack/></div>
    </div>
}

export const Titles = ({title, description}) => {
    return <div className={style.titles}>
        <h2 style={{fontSize: title}}>Alex Smith</h2>
        <h4 style={{fontSize: description}}>Web Designer</h4>
    </div>
}

export const PageTitle = ({title, span}) => {
    return <div className={style.pageTitle}>
        <h2>{title} <span>{span}</span></h2>
    </div>
}

export const WhiteSpace = ({size}) => {
    return <div style={{paddingBottom: size}}/>
}

export const BlockTitle = ({title, span}) => {
    return <div className={style.blockTitle}>
        <h3>{title} <span>{span}</span></h3>
    </div>
}