import React, { useState } from 'react';
const { Switch, Route } = require('react-router-dom');
import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { routes } from '../router/router'
export function App(props: any): JSX.Element {
    let router =  routes.map((router: any, index: number) => {
        return <Route exact path={router.path} component={router.component} key={index} />
    })
    return (
        <React.Fragment>
            <Header />
            <Switch>
                {router}
            </Switch>
            <Footer />
        </React.Fragment>
    )
}
export default App;