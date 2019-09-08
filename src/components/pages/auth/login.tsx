import React from 'react';
export function Login(): JSX.Element {
    return (
        <React.Fragment>
            <section className="default-section login-section">
                <div className="container">
                    <div className="row">
                        <div className="block-header">
                            <h3> LOGin Us </h3>
                        </div>
                        <div className="block-content">
                            <div className="col-md-6 margin-auto">
                                <form action="" method="" >
                                    <div className="col-md-12">
                                        <div className="default-element">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="default-element">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="default-element text-center">
                                        <button type="submit" className="blue waves-effect"> send form </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}