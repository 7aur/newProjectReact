import React from 'react';
import { BlogItem } from './blog-item'
import { Cover } from '../../pageCover/cover';
import {HttpsModule} from '../../../https/httpsModue';
import {connect} from 'react-redux';
export function Blog(props:any): JSX.Element {
        const postUrl = {
            url: "http://localhost:1212/api/blogs",
            method:"GET",
            data:{
                "userId": 31,
                "id": 343,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et orro eius odio et labore et velit aut"
            },
            payload:props.setName
        }
        return (
        <React.Fragment>
            <Cover title="Blog" content="blog" />
            <section className="section-default blog-section">
                <div className="container">
                    <div className="row">
                        <div className="section-header">
                            <h4> LATEST NEWS </h4>
                        </div>
                        <div className="blog-template">
                            <BlogItem data={props.mapping.mainReducer.blogs[0]} />
                            <HttpsModule props={postUrl} data={props} />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

const mapToState = (state:any) => {
    return {
        blogs:state
    }
}

export default connect(mapToState, null)(Blog)