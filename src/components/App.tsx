import React, { useState } from 'react';
const { Switch, Route } = require('react-router-dom');
import { BlogSingle } from '../components/pages/blog/blog-single'
import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { routes } from '../router/router';
import { async } from 'q';
export function App(props: any): JSX.Element {
    let router = routes.map((router: any, index: number) => {
        return <Route exact path={router.path} component={router.component} key={index} />
    });

    let ref = async () => {

        let response = await fetch("http://localhost:8080/api/games");
    
        if (response.ok) { // если HTTP-статус в диапазоне 200-299
          // получаем тело ответа (см. про этот метод ниже)
          let json = await response.json();
          console.log(json)
        } 
    }

    ref();
   
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