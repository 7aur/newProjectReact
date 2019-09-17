import React from 'react'
const bgVideo = require('../../../assets/video/video.mp4');
const bgImage = require('../../../assets/images/slider/image8.jpg');
const image = require('../../../assets/images/slider/image1.jpg');
const blogImage = require('../../../assets/images/blog/road.gif');
const company = require('../../../assets/images/company/1.png');
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export function Home(): JSX.Element {
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
            <section className="slider-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="slider-content-block">
                            <div className="slider-text">
                                <h1> WEB DESIGN & ECOMMERCE DEVELOPMENT <br />  FOR BUSINESSES & AGENCIES </h1>
                            </div>
                            <div className="slider-link">
                                <a className="link-md blue" href="#">  Start a project </a>
                                <a className="link-md white" href="#">View our work </a>
                            </div>
                        </div>
                        <div className="slider-cover">
                            <img src={bgImage} alt="slider " />
                        </div>
                        <div className="slider-video">
                            <video autoPlay muted loop >
                                <source src={bgVideo} type="video/mp4" />
                                Your browser does not support HTML5 video.
                    </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-default about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 ab-image">
                            <img src={image} alt="about us" />
                        </div>
                        <div className="ab-content">
                            <h3> This is your about  </h3>
                            <p>
                                It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout. The point
                                of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text, and a search for
                                'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the like).
                    </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-default blog-section">
                <div className="container">
                    <div className="row">
                        <div className="section-header">
                            <h4> LATEST NEWS </h4>
                        </div>
                        <div className="blog-template">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                    <span> <a href="#"> Admin </a> Posted On December 14, 2018 </span>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src={blogImage} alt="Why White Space is" /> </a>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                            </p>
                                </div>
                                <div className="blog-category">
                                    <span> Categories :  </span>
                                    <ul className="blog-category-ul">
                                        <li> <a href="#"> game </a> </li>
                                    </ul>
                                </div>
                                <div className="blog-more">
                                    <a href="#"> continue reading  </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                    <span> <a href="#"> Admin </a> Posted On December 14, 2018 </span>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src={blogImage} alt="Why White Space is" /> </a>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                            </p>
                                </div>
                                <div className="blog-category">
                                    <span> Categories :  </span>
                                    <ul className="blog-category-ul">
                                        <li> <a href="#"> game </a> </li>
                                    </ul>
                                </div>
                                <div className="blog-more">
                                    <a href="#"> continue reading  </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                    <span> <a href="#"> Admin </a> Posted On December 14, 2018 </span>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src={blogImage} alt="Why White Space is" /> </a>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                            </p>
                                </div>
                                <div className="blog-category">
                                    <span> Categories :  </span>
                                    <ul className="blog-category-ul">
                                        <li> <a href="#"> game </a> </li>
                                    </ul>
                                </div>
                                <div className="blog-more">
                                    <a href="#"> continue reading  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-default company-section">
                <div className="container">
                    <div className="row">
                        <div className="section-header">
                            <h4> Our company </h4>
                        </div>
                        <Carousel responsive={responsive} className="company-slider owl-slider owl-carousel">
                            <a href="#"> <img src={company} alt="company 4" /></a>
                            <a href="#"> <img src={company} alt="company 4" /></a>
                            <a href="#"> <img src={company} alt="company 4" /></a>
                            <a href="#"> <img src={company} alt="company 4" /></a>
                            <a href="#"> <img src={company} alt="company 4" /></a>
                            <a href="#"> <img src={company} alt="company 4" /></a>
                            <a href="#"> <img src={company} alt="company 4" /></a>
                            <a href="#"> <img src={company} alt="company 4" /></a>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="section-default contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-10 col-xs-12 margin-auto">
                            <div className="form-block">
                                <form action="" method="" >
                                    <div className="col-md-6 col-xs-6">
                                        <div className="default-element">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-6">
                                        <div className="default-element">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-md-12">
                                        <div className="default-element">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="default-element">
                                            <textarea className="form-control" placeholder="Text" ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="default-element text-right">
                                            <button type="submit" className="blue"> send form </button>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
