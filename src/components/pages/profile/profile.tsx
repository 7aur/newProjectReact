import React from 'react';
import { Cover } from '../../pageCover/cover';
const bgImage = require('../../../assets/images/slider/image1.jpg');
const profileImage = require('../../../assets/images/profile/leon.jpg');
export function Profile(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Profile" content="profile" />
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="profile-block-section">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <div className="profile-block">
                                    <div className="profile-cover">
                                        <img src={bgImage} alt="slider" />
                                        <div className="profile-img-file">
                                            <input type="file" />
                                            <button type="button"> <i className="fa fa-upload" aria-hidden="true"></i> </button>
                                        </div>
                                        <div className="profile-image">
                                            <div className="profile-img-file">
                                                <input type="file" />
                                                <button type="button"> <i className="fa fa-upload" aria-hidden="true"></i> </button>
                                            </div>
                                            <img src={profileImage} alt="users" />
                                        </div>
                                    </div>
                                    <div className="profile-information">
                                        <h4> Scott Kennedy </h4>
                                        <span> Front End Developer *** Freelancer </span>
                                    </div>
                                    <div className="profile-footer">
                                        <a href="#"> Follow me </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                                <div className="profile-forms">
                                    <form>
                                        <div className="col-md-6">
                                            <div className="default-element">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="default-element">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="default-element">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="default-element">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="default-element">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="default-element">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-right">
                                            <button className="link-md blue waves-effect" type="submit">  Submit </button>
                                        </div>
                                        <div className="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}