import React from 'react';
const company = require('../../../assets/images/company/1.png');
import { Cover } from '../../pageCover/cover';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export function Company(): JSX.Element {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <React.Fragment>
            <Cover title="Services" content="service" />
            <section className="section-default company-section">
                <div className="container">
                    <div className="row">
                        <div className="section-header">
                            <h4> Our company </h4>
                        </div>
                        <Carousel responsive={responsive} className="company-slider owl-slider owl-carousel">
                        <a href="#"> <img src={company} alt="company 1" />  </a>
                        <a href="#"> <img src={company} alt="company 1" />  </a>
                        <a href="#"> <img src={company} alt="company 1" />  </a>
                        <a href="#"> <img src={company} alt="company 1" />  </a>
                        <a href="#"> <img src={company} alt="company 1" />  </a>
                        <a href="#"> <img src={company} alt="company 1" />  </a>
                        <a href="#"> <img src={company} alt="company 1" />  </a>
                        </Carousel>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}