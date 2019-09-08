import React from 'react';
const blogImage = require('../../../assets/images/blog/road.gif');
import { Cover } from '../../pageCover/cover';
export function Blog(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Blog" content="blog" />
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
        </React.Fragment>
    )
}