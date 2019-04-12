import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Store from '../store/Store';
import ClassDetail from '../component/ClassDetail';
import App from '../App';

export default () => 
  <BrowserRouter>
    <Switch>             
      <Route exact path="/activities/:id" render={ props => <Store component={<ClassDetail />} /> }/>
      <Route path="/" render={ props => <Store component={<App />} /> } />
    </Switch>
  </BrowserRouter>
