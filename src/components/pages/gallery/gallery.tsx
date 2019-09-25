import React from 'react';
import { Cover } from '../../pageCover/cover';
export function Gallery(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Gallery single" content="galley" />
            <section className="section-default blog-section">
                <div className="container">
                    <div className="row">
                        <div className="section-header">
                            <h4> LATEST Gallery </h4>
                        </div>
                        <div className="blog-template">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src="assets/image/blog/road.gif" alt="Why White Space is" /> </a>
                                </div>
                                <div className="blog-category">
                                    <span> Categories :  </span>
                                    <ul className="blog-category-ul">
                                        <li> <a href="#"> game </a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src="assets/image/blog/road.gif" alt="Why White Space is" /> </a>
                                </div>
                                <div className="blog-category">
                                    <span> Categories :  </span>
                                    <ul className="blog-category-ul">
                                        <li> <a href="#"> game </a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src="assets/image/blog/road.gif" alt="Why White Space is" /> </a>
                                </div>
                                <div className="blog-category">
                                    <span> Categories :  </span>
                                    <ul className="blog-category-ul">
                                        <li> <a href="#"> game </a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}