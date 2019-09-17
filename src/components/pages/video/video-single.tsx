import React from 'react';
import { Cover } from '../../pageCover/cover';
export function VideoSingle(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Video single" content="video" />
            <section className="section-default">
                <div className="container">
                    <div className="row">
                        <div className="blog-template">
                            <div className="col-md-8 margin-auto">
                                <div className="blog-header">
                                    <h2>  Why White Space is Important to Web Design </h2>
                                </div>
                                <div className="video-blog">
                                    <video controls>
                                        <source src="assets/video/video.mp4" type="video/mp4" />
                                        Your browser does not support HTML5 video.
                            </video>
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