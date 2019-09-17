import React from 'react';
const bgVideo = require('../../../assets/video/video.mp4');
const bgImage = require('../../../assets/images/slider/image8.jpg');
import { Cover } from '../../pageCover/cover';
export function Slider(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Slider" content="slider" />
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
        </React.Fragment>
    )
}