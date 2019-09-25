import React from 'react';
const bgImage = require('../../assets/images/slider/image1.jpg');
export function ReadSlider(): JSX.Element {
    return (
        <div>
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
                        <td className="wh-nowrap">  <div className="mini-image"> <img  src={bgImage} alt="" />  </div> </td>
                        <td className="wh-nowrap">
                            <button type="button" className="mini-button btn-primary waves-effect"> <i className="fa fa-edit"></i> </button>
                            <button type="button" className="mini-button btn-danger waves-effect"> <i className="fa fa-remove"></i> </button>
                            <button type="button" className="mini-button btn-warning waves-effect"> <i className="fa fa-eye"></i> </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}