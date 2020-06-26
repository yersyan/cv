import React, {useState} from "react";
import "./certificates.css";
import img from "../../img/clients/client-1.png"
import {CertificateItem} from "./certificateItem";

export const Certificates = () => {
    const [certificates] = useState([
        {logo: img, title: "Psyhology of Intertnation Design", id: "Membership ID: XXXX", date: "19 April 2018", company: ""},
        {logo: img, title: "Psyhology of Intertnation Design", id: "Membership ID: XXXX", date: "19 April 2018", company: ""},
    ])


    return <div className="row">
        {certificates.map(c => {
            return <CertificateItem key={c.id} logo={c.logo} title={c.title} id={c.id} date={c.date} company={c.company}/>
        })}
    </div>
}