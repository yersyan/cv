import React from "react";
import "./pricingBlock.css";
import cn from "classnames";
import style from "../../css/header.module.css"

export const Pricing = ({title, price, secondClass = null, text}) => {

    return <div className={cn("fwPackageWrap", secondClass)}>
        <div className="fwPackage">
            <div className="fwHeadingRow">
                <span>{title}</span>
            </div>

            <div className="fwPricingRow">
                <span>{price}</span>
                <small>per month</small>
            </div>

            <div className="fwButtonRow">
                <a href="/#" target="_self" className={cn(style.btn, style.btnSecondary)}>Free Trial</a>
            </div>
            {text.map(t => {
                return <div className="fwDefaultRow">{t}</div>
            })}
        </div>
    </div>
}