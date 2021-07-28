import React from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/dashborad';
import ClinicsMap from '../pages/clinicsMap';

const MainRoutes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/'>
               <Redirect to='/dashboard' />
            </Route>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/map' component={ClinicsMap} />
         </Switch>
      </BrowserRouter>
   );
};

export default MainRoutes;
