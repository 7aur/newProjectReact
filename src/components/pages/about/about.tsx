import React from 'react';
const image = require('../../../assets/images/slider/image1.jpg');
import { Cover } from '../../pageCover/cover';
export function About(): JSX.Element {
    return (
        <React.Fragment>
           <Cover  title="About us"  content="about"/>
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
        </React.Fragment>
    )
}