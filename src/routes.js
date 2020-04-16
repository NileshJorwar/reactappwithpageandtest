import React from "react";
import {BrowserRouter, Route} from "react-router-dom"

import App from "./App";
import NewPage from "./subfolder/NewPage";

const routes = () => (
    <BrowserRouter >
        <Route path="/" exact component={App} />
         <Route path="/page" component={NewPage}/>
    </BrowserRouter>
);

export default routes;


