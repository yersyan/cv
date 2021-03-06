import React, {useState} from "react";
import style from "./funFacts.module.css"
import {FunFact} from "./funFact";
import {faClock, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";

export const FunFacts = () => {
    const [facts] = useState([
        {img: faHeart, title: "Happy Clients", quantity: 578},
        {img: faClock, title: "Working Hours", quantity: 4780},
        {img: faStar, title: "Awards Won", quantity: 15},
    ])


    return <div className={style.funFacts}>
        {facts.map(f => {
            return <FunFact img={f.img} title={f.title} quantity={f.quantity}/>
        })}

    </div>
}
