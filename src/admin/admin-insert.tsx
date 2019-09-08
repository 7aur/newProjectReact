import React from 'react';
export function AdminInsert(): JSX.Element {
    return (
        <section className="default-section admin-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="admin-block">
                        <div className="col-md-3">
                            <div className="menu-block">
                                <ul className="adm-menu">
                                    <li> <span> Admin panel Insert </span>
                                        <ul>
                                            <li className="active"> <a href="#blog-form-block" data-toggle="tab" > Blog </a> </li>
                                            <li> <a href="#about-form-block" data-toggle="tab" > About </a> </li>
                                            <li> <a href="#slider-form-block" data-toggle="tab"> Slider </a> </li>
                                            <li> <a href="#service-form-block" data-toggle="tab"> Services </a> </li>
                                            <li> <a href="#gallery-form-block" data-toggle="tab"> Gallery </a> </li>
                                            <li> <a href="#video-form-block" data-toggle="tab"> Video </a> </li>
                                            <li> <a href="#music-form-block" data-toggle="tab"> Music </a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="jumbotron tab-content">
                                <div id="blog-form-block" className="tab-pane fade in active">
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
                           <div id="about-form-block" className="tab-pane fade  ">
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
                                <div id="slider-form-block" className="tab-pane fade">
                                    test
                            </div>
                                <div id="service-form-block" className="tab-pane fade">
                                    services
                            </div>
                                <div id="gallery-form-block" className="tab-pane fade">
                                    gallery
                            </div>
                                <div id="video-form-block" className="tab-pane fade">
                                    video
                            </div>
                                <div id="music-form-block" className="tab-pane fade">
                                    music
                            </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}