import React from "react";
import style from "./clients.module.css"

export const Client = ({img}) => {
    return <div className={style.clientBlock}>
        <a href="/#" target="_blank" title="Logo">
            <img src={img} alt="Logo"/>
        </a>
    </div>
}
