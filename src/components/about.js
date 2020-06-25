import React from "react";
import {PageTitle, WhiteSpace} from "./components";
import style from "../css/about.module.css";
import {FaStore, GoPencil, GrFlagFill, TiDeviceLaptop} from "react-icons/all";
import {Testimonials} from "./testimonials/testimonials";
import {Clients} from "./clients/clients";
import {PricingBlock} from "./pricings/pricingBlock";
import {FunFacts} from "./funFacts/funFacts";

export const About = () => {
    return <section data-id="about-me" className={style.animatedSection}>
        <PageTitle/>

        <div className={style.sectionContent}>

            <div className={style.aboutBlock}>
                <div className={style.aboutText}>
                    <p>Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit
                        amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor.
                        Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum
                        dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.</p>
                </div>

                <div className={style.infoList}>
                    <ul>
                        <li>
                            <span className={style.title}>Age</span>
                            <span className="value">32</span>
                        </li>

                        <li>
                            <span className={style.title}>Residence</span>
                            <span className="value">USA</span>
                        </li>

                        <li>
                            <span className={style.title}>Address</span>
                            <span className="value">88 Some Street, Some Town</span>
                        </li>

                        <li>
                            <span className={style.title}>e-mail</span>
                            <span className="value"><a href="https://lmpixels.com/cdn-cgi/l/email-protection"
                                                       className="__cf_email__"
                                                       data-cfemail="6a0f070b03062a0f120b071a060f44090507">[email&#160;protected]</a></span>
                        </li>

                        <li>
                            <span className={style.title}>Phone</span>
                            <span className="value">+0123 123 456 789</span>
                        </li>
                    </ul>
                </div>
            </div>


            <WhiteSpace size={"50px"}/>


            <div className={style.blockTitle}>
                <h3>What <span>I Do</span></h3>
            </div>

            <div className={style.infoBlockWIconContent}>
                <div className={style.infoBlockWIcon}>
                    <div className={style.ciIcon}>
                        <FaStore className={style.icon}/>
                    </div>
                    <div className={style.ciText}>
                        <h4>Ecommerce</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                            massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                </div>
                <div className={style.infoBlockWIcon}>
                    <div className={style.ciIcon}>
                        <TiDeviceLaptop className={style.icon}/>
                    </div>
                    <div className={style.ciText}>
                        <h4>Web Design</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                            massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                </div>


                <div className={style.infoBlockWIcon}>
                    <div className={style.ciIcon}>
                        <GoPencil className={style.icon}/>
                    </div>
                    <div className={style.ciText}>
                        <h4>Copywriting</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                            massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                </div>
                <div className={style.infoBlockWIcon}>
                    <div className={style.ciIcon}>
                        <GrFlagFill className={style.icon}/>
                    </div>
                    <div className={style.ciText}>
                        <h4>Management</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                            massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                    </div>
                </div>

            </div>


            <WhiteSpace size={"30px"}/>


            <div className={style.blockTitle}>
                <h3>Testimonials</h3>
            </div>


            <Testimonials/>


            <WhiteSpace size={"50px"}/>


            <div className={style.blockTitle}>
                <h3>Cilents</h3>
            </div>

            <Clients/>
            <WhiteSpace size={"50px"}/>


            <div className={style.blockTitle}>
                <h3>Pricing</h3>
            </div>


            <PricingBlock/>


            <WhiteSpace size={"50px"}/>


            <div className={style.blockTitle}>
                <h3>Fun <span>Facts</span></h3>
            </div>


            <FunFacts/>


        </div>
    </section>
}