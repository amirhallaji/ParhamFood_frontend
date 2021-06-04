import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import { HomePage } from './components/homepage/homepage.component';
import { RegisterPage } from './components/RegisterPage/registerPage.component';

export const Main = () => {
      return (
            <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/register" component={RegisterPage} />
            </Switch>
      );
};