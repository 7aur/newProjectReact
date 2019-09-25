import React from 'react';
const miniLogo = require('../../assets/sass/icons/logos.png');
const {Link} = require('react-router-dom');
export function Footer(): JSX.Element {
    return (
        <div className="footer">
            <div className="container">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="inline-flex">
                        <div className="f-content">
                            <div className="logo">
                                <Link to="/demo" > <img src={miniLogo} alt="Neff Creative" /> </Link>
                            </div>
                            <div className="copyright">
                                <p>1000 North Carolina Music Factory <br /> Blvd Charlotte,
                             F NC 28206 <br /> Copyright 2018. All Rights Reserved.</p>
                            </div>
                        </div>
                        <ul className="f-menu">
                            <li> <a href="#"> HOME </a> </li>
                            <li> <a href="#"> COMpany </a> </li>
                            <li> <a href="#"> work </a> </li>
                            <li> <a href="#"> Partners </a> </li>
                            <li> <a href="#"> testimonials </a> </li>
                            <li> <a href="#"> contact </a> </li>
                            <li> <a href="#"> Blog </a> </li>
                            <li> <a href="#"> Privacy </a> </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="inline-flex">
                        <div className="f-header"> <h4> GET IN TOUCH </h4> </div>
                        <div className="f-social">
                            <ul>
                                <li> <a href="#" className="fb"> <i className="fa fa-facebook"></i> </a> </li>
                                <li> <a href="#" className="tw"> <i className="fa fa-twitter"></i> </a> </li>
                                <li> <a href="#" className="go"> <i className="fa fa-google"></i> </a> </li>
                                <li> <a href="#" className="in"> <i className="fa fa-instagram"></i> </a> </li>
                                <li> <a href="#" className="pn"> <i className="fa fa-pinterest"></i> </a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="f-feeds">
                        <ul>
                            <li>
                                <span> A research-based article on the most important features you need to start your wholesale eCommerce store. Read the…
                                <a href="https://twitter.com/i/web/status/1075652373521944576">twitter.com/i/web/status/1…</a>
                                </span>
                                <span>
                                    <a href="http://twitter.com/PSDCenter/status/1075652373521944576" title="view tweet on twitter">about 2 days ago</a>
                                </span>
                            </li>
                            <li>
                                <span> A research-based article on the most important features you need to start your wholesale eCommerce store. Read the…
                                <a href="https://twitter.com/i/web/status/1075652373521944576">twitter.com/i/web/status/1…</a>
                                </span>
                                <span>
                                    <a href="http://twitter.com/PSDCenter/status/1075652373521944576" title="view tweet on twitter">about 2 days ago</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="mini-cpyright">
                    <p> This is designed by Scott Kennedy 2018. All Rights Reserved </p>
                </div>
            </div>
        </div>
    )
}