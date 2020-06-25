import React, {useState} from "react";
import style from "./testimonials.module.css"
import {Testimonial} from "./testimonial";
import testimonial1 from "../../img/testimonials/testimonial-1.jpg"
import testimonial2 from "../../img/testimonials/testimonial-2.jpg"
import testimonial3 from "../../img/testimonials/testimonial-3.jpg"

export const Testimonials = () => {
    const [authors] = useState([
        {img: testimonial1, name: "Julia Hickman", company: "Omni Source"},
        {img: testimonial2, name: "Robert Watkins", company: "Endicott Shoes"},
        {img: testimonial3, name: "Kristin Carroll", company: "Helping Hand"},
    ])

    return <div className={style.testimonials}>
        {authors.map(author => {
            return <Testimonial img={author.img} author={author.name} company={author.company}/>
        })}
    </div>
}