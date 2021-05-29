import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Feed from './Feed';
import MenuHospital from './MenuHospital';
import Prontuario from './Prontuario';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Feed}></Route>
      <Route exact path='/prontuario' component={Prontuario}></Route>
      <Route exact path='/menu' component={MenuHospital}></Route>
    </Switch>
  );
}

export default Main;