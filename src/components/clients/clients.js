import React, {useState} from "react";
import style from "./clients.module.css";
import logo1 from "../../img/clients/client-1.png";
import logo2 from "../../img/clients/client-2.png";
import logo3 from "../../img/clients/client-3.png";
import logo4 from "../../img/clients/client-4.png";
import logo5 from "../../img/clients/client-5.png";
import logo6 from "../../img/clients/client-6.png";
import logo7 from "../../img/clients/client-7.png";
import {Client} from "./client";

export const Clients = () => {
    const [clients] = useState([
        {logo: logo1},
        {logo: logo2},
        {logo: logo3},
        {logo: logo4},
        {logo: logo5},
        {logo: logo6},
        {logo: logo7},
    ])

    return <div className={style.clients}>
        {clients.map(client => {
            return <Client img={client.logo}/>
        })}
    </div>
}