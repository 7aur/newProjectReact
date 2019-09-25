import React from 'react';
import { Cover } from '../../pageCover/cover';
export function GallerySIngle(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Servicess" content="service" />
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
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src="assets/image/blog/road.gif" alt="Why White Space is" /> </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src="assets/image/blog/road.gif" alt="Why White Space is" /> </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="blog-header">
                                    <h2> <a href="#">  Why White Space is Important to Web Design </a>  </h2>
                                </div>
                                <div className="blog-image">
                                    <a href="#" > <img src="assets/image/blog/road.gif" alt="Why White Space is" /> </a>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="paging">
                                <ul className="pagination">
                                    <li><a href="#"> <i className="fa fa-chevron-left" aria-hidden="true"></i> </a></li>
                                    <li className="active"><a href="#" >1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}