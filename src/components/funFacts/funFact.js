import React from "react";
import style from "./funFacts.module.css";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const FunFact = ({img, title, quantity}) => {
    return <div className={cn(style.funFact, style.grayDefault)}>
        <FontAwesomeIcon icon={img} className={style.icon}/>
        <h4>{title}</h4>
        <span className={style.funFactBlockValue}>{quantity}</span>
        <span className={style.funFactBlockText}/>
    </div>
}