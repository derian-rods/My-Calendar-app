import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { CalendarScreen } from '../screen/CalendarScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { PrivateRoute } from './PrivateRouter';

export const AppRouter = () => {
    return (
        <Router>
           <div>
                {/* NavBar maybe */}
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <PrivateRoute exact path='/' isAuthenticated={false} component={CalendarScreen}/>
                </Switch>
            </div> 
        </Router>
    )
}
