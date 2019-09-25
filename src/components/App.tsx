import React, { useState } from 'react';
const { Switch, Route } = require('react-router-dom');
import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { routes } from '../router/router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
export function App(props: any): JSX.Element {
    let router = routes.map((router: any, index: number) => {
        return <Route render={() => <router.component {...props} />} exact path={router.path} key={index} />
    });
    return (
        <div>
            <Header {...props} />
            <Switch>
                {router}
            </Switch>
            <Footer {...props} />
        </div>
    )
}

const mapToState = (state: any) => {
    return {
        mapping: state
    }
}

const mapToStateChange = (dispatch: any) => {
    return {
        setName: (blogs: any) => {
            dispatch({
                type: 'ADD',
                payload: blogs
            })
        },
        clearBlog: (blogs: any) => {
            dispatch({
                type: 'REMOVE',
                payload: blogs
            })
        }
    }
}

export default withRouter(connect(mapToState, mapToStateChange)(App))
