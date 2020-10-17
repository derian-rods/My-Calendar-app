import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { CalendarScreen } from '../screen/CalendarScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';
import { PrivateRoute } from './PrivateRouter';

export const AppRouter = () => {
    return (
        <Router>
           <div>
                {/* NavBar maybe */}
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/register' component={RegisterScreen} />
                    <PrivateRoute exact path='/' isAuthenticated={true} component={CalendarScreen}/>
                </Switch>
            </div> 
        </Router>
    )
}
