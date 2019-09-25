import React from 'react';
export function ReadAbout(): JSX.Element {
    return (
        <div className="jumbotron tab-content">
            <div>
                <form>
                    <div className="col-md-12">
                        <div className="default-element">
                            <input type="text" className="form-control" placeholder="About page header" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="default-element">
                            <textarea className="form-control" placeholder="About page content"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 text-right">
                        <button className="link-md blue waves-effect" type="submit">  Submit </button>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>
    )
}