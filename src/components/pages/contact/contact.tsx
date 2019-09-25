import React from 'react';
import { Cover } from '../../pageCover/cover';
export function Contact(): JSX.Element {
    return (
        <React.Fragment>
            <Cover title="Contact us" content="contact" />
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
    )
}