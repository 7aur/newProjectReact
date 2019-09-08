import React from 'react';
import {coverData} from '../../interface/interface'
export class Cover extends React.Component <coverData> {
    componentDidMount () {
        console.log('this page rendered')
    }
    render () {
            return (
                <section className="default-section removeComponent">
                    <div className="container">
                        <div className="row">
                            <div className="block-header">
                                <h3> {this.props.title} </h3>
                            </div>
                            <div className="block-content">
                                <p>
                                This is {this.props.content} page   ...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
}