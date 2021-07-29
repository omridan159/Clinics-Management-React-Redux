import React from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashborad';

const MainRoutes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/'>
               <Redirect to='/dashboard' />
            </Route>
            <Route exact path='/dashboard' component={Dashboard} />
         </Switch>
      </BrowserRouter>
   );
};

export default MainRoutes;
