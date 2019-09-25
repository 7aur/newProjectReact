import React from 'react';
const blogImage = require('../../../assets/images/blog/road.gif');
import { Cover } from '../../pageCover/cover';
export function BlogSingle(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Blog single" content="blog single" />
            <section className="section-default blog-section blog-section-single ">
                <div className="container">
                    <div className="row">
                        <div className="blog-template">
                            <div className="col-md-12">
                                <div className="blog-header">
                                    <h2>  Why White Space is Important to Web Design  </h2>
                                    <span> <a href="#"> Admin </a> Posted On December 14, 2018 </span>
                                </div>
                                <div className="blog-image">
                                    <img src={blogImage} alt="Why White Space is" />
                                </div>
                                <div className="blog-category">
                                    <span> Categories :  </span>
                                    <ul className="blog-category-ul">
                                        <li> <a href="#"> game </a> </li>
                                    </ul>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                            </p>
                                    <p>
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                            </p><br />
                                    <p>
                                        A long time ago, when the Internet was still fresh and people didn’t
                                        know what worked, and what didn’t, it was common to see websites that
                                        looked like this: That’s an actual photo of the Apple website of old.
                                        Doesn’t look like anything of today’s version. On one hand. The
                            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}