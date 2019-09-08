import React from 'react';
export function Admin(): JSX.Element {
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
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className="wh-nowrap"> Order № </th>
                                                <th> Blog name </th>
                                                <th className="wh-nowrap"> Author </th>
                                                <th className="wh-nowrap"> Controls </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td > 1 </td>
                                                <td> Resident evil remake 2 rumour </td>
                                                <td className="wh-nowrap">Scott Kennedy </td>
                                                <td className="wh-nowrap">
                                                    <button type="button" className="mini-button btn-primary waves-effect"> <i className="fa fa-edit"></i> </button>
                                                    <button type="button" className="mini-button btn-danger waves-effect"> <i className="fa fa-remove"></i> </button>
                                                    <button type="button" className="mini-button btn-warning waves-effect"> <i className="fa fa-eye"></i> </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="about-form-block" className="tab-pane fade  ">
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
                                <div id="slider-form-block" className="tab-pane fade">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className="wh-nowrap"> Order № </th>
                                                <th> Slider name </th>
                                                <th> Slider link </th>
                                                <th className="wh-nowrap"> Slider image </th>
                                                <th className="wh-nowrap"> Controls </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td > 1 </td>
                                                <td> Resident evil remake 2 rumour </td>
                                                <td> www.youtube.com </td>
                                                <td className="wh-nowrap">  <div className="mini-image"> <img src="assets/image/slider/image1.jpg" alt="" />  </div> </td>
                                                <td className="wh-nowrap">
                                                    <button type="button" className="mini-button btn-primary waves-effect"> <i className="fa fa-edit"></i> </button>
                                                    <button type="button" className="mini-button btn-danger waves-effect"> <i className="fa fa-remove"></i> </button>
                                                    <button type="button" className="mini-button btn-warning waves-effect"> <i className="fa fa-eye"></i> </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="service-form-block" className="tab-pane fade">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className="wh-nowrap"> Order № </th>
                                                <th> Services link </th>
                                                <th> Services title </th>
                                                <th className="wh-nowrap"> Services image </th>
                                                <th className="wh-nowrap"> Controls </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td > 1 </td>
                                                <td> www.youtube.com </td>
                                                <td> Resident evil remake 2 rumour </td>
                                                <td className="wh-nowrap">  <div className="mini-image"> <img src="assets/image/slider/image1.jpg" alt="" />  </div> </td>
                                                <td className="wh-nowrap">
                                                    <button type="button" className="mini-button btn-primary waves-effect"> <i className="fa fa-edit"></i> </button>
                                                    <button type="button" className="mini-button btn-danger waves-effect"> <i className="fa fa-remove"></i> </button>
                                                    <button type="button" className="mini-button btn-warning waves-effect"> <i className="fa fa-eye"></i> </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="gallery-form-block" className="tab-pane fade">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className="wh-nowrap"> Order № </th>
                                                <th> Gallery title </th>
                                                <th> Gallery category </th>
                                                <th className="wh-nowrap"> Gallery image </th>
                                                <th className="wh-nowrap"> Controls </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td > 1 </td>
                                                <td> Resident Evil remake 2 </td>
                                                <td> Game </td>
                                                <td className="wh-nowrap">  <div className="mini-image"> <img src="assets/image/slider/image1.jpg" alt="" />  </div> </td>
                                                <td className="wh-nowrap">
                                                    <button type="button" className="mini-button btn-primary waves-effect"> <i className="fa fa-edit"></i> </button>
                                                    <button type="button" className="mini-button btn-danger waves-effect"> <i className="fa fa-remove"></i> </button>
                                                    <button type="button" className="mini-button btn-warning waves-effect"> <i className="fa fa-eye"></i> </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="video-form-block" className="tab-pane fade">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className="wh-nowrap"> Order № </th>
                                                <th> Video title </th>
                                                <th> Video category </th>
                                                <th className="wh-nowrap"> Video cover </th>
                                                <th className="wh-nowrap"> Controls </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td > 1 </td>
                                                <td> Resident Evil remake 2 </td>
                                                <td> Game </td>
                                                <td className="wh-nowrap">  <div className="mini-image"> <img src="assets/image/slider/image1.jpg" alt="" />  </div> </td>
                                                <td className="wh-nowrap">
                                                    <button type="button" className="mini-button btn-primary waves-effect"> <i className="fa fa-edit"></i> </button>
                                                    <button type="button" className="mini-button btn-danger waves-effect"> <i className="fa fa-remove"></i> </button>
                                                    <button type="button" className="mini-button btn-warning waves-effect"> <i className="fa fa-eye"></i> </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="music-form-block" className="tab-pane fade">
                                    Music is coming !!! !! ! ...
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