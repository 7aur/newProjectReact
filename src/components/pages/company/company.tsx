import React from 'react';
const company = require('../../../assets/images/company/1.png');
export function Company(): JSX.Element {
    return (
        <section className="section-default company-section">
            <div className="container">
                <div className="row">
                    <div className="section-header">
                        <h4> Our company </h4>
                    </div>
                    <ul className="company-slider owl-slider owl-carousel">
                        <li> <a href="#"> <img src={company} alt="company 1" />  </a></li>
                        <li> <a href="#"> <img src={company} alt="company 2" /></a> </li>
                        <li> <a href="#"> <img src={company} alt="company 3" /></a> </li>
                        <li> <a href="#"> <img src={company} alt="company 1" /></a> </li>
                        <li> <a href="#"> <img src={company} alt="company 4" /></a> </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}