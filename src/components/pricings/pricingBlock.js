import React, {useState} from "react";
import {Pricing} from "./pricing";
import "./pricingBlock.css"

export const PricingBlock = () => {

    const [pricingData]  = useState([
        {title: "Silver", price: "$64", text: ["Lorem ipsum dolor", "Pellentesque scelerisque", "Morbi eu sagittis"]},
        {title: "Gold", price: "$128", text: ["Lorem ipsum dolor", "Pellentesque scelerisque", "Morbi eu sagittis", "Donec non diam"]},
    ])

    return <div className="fwPricing">
        {pricingData.map(p => {
            return <Pricing title={p.title} price={p.price} text={p.text}/>
        })}
    </div>
}