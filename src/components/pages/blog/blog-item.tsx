import React from 'react';
const blogImage = require('../../../assets/images/blog/road.gif');
import { Loading } from '../../miniComponent/loading';
export function BlogItem(props: any): JSX.Element {
    if (props.data) {
        var data = props.data.map((mapping: any, index: number) => {
            return (
                <div className="col-md-4 col-sm-4 col-xs-12" key={index}>
                    <div className="blog-header">
                        <h2> <a href="#"> {mapping.title} </a>  </h2>
                        <span> <a href="#"> Admin </a> Posted On {mapping.created_at} </span>
                    </div>
                    <div className="blog-image">
                        <a href="#" > <img src={mapping.image} alt={mapping.image} /> </a>
                    </div>
                    <div className="blog-content">
                        <p>
                            {mapping.description}
                        </p>
                    </div>
                    <div className="blog-category">
                        <span> Categories :  </span>
                        <ul className="blog-category-ul">
                            <li> <a href="#"> {mapping.category} </a> </li>
                        </ul>
                    </div>
                    <div className="blog-more">
                        <a href={mapping.blog_id}> continue reading  </a>
                    </div>
                </div>
            )
        })
    }
    
    return (
        <React.Fragment>
            {
                props.data ?
                    data.length === 0  ? <div className="no-result">  no result </div> : data
                    :
                    <Loading />
            }
        </React.Fragment>
    )
}