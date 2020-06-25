import React from "react";
import style from "./testimonials.module.css";
import {FaQuoteRight} from "react-icons/all";

export const Testimonial = ({img, author, company}) => {
    return <div className={style.testimonial}>
        <div className={style.img}>
            <img src={img} alt="Alex Smith"/>
        </div>
        <div className={style.text}>
            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla
                condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula
                pellentesque, at vehicula dui ultrices.</p>
        </div>

        <div className={style.authorInfo}>
            <h4 className={style.author}>{author}</h4>
            <h5 className={style.company}>{company}</h5>
            <div className={style.icon}>
                <FaQuoteRight/>
            </div>
        </div>
    </div>
}