import React, { useEffect, useState } from 'react';
import {firebase} from '../FirebaseConfing'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { CalendarScreen } from '../screen/CalendarScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { PrivateRoute } from './PrivateRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRouter';
import { LoadingPage } from '../components/LoadingPage';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [cheacking, setcheacking] = useState(true);
    const [isLoggedin, setisLoggedin] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged( async user => {
            if(user?.uid){  
                dispatch(login(user.uid, user.displayName, user.photoURL));
                setisLoggedin(true);
            }else{
                setisLoggedin(false);
            }
            setcheacking(false)
        })
    }, [dispatch ])

    if(cheacking){
        return(
            <LoadingPage />
        )
    }
 
    return (
        <Router>
           <div>
                <Switch>
                    <PublicRoute exact path='/login' isAuthenticated={isLoggedin} component={LoginScreen} />
                    <PrivateRoute exact path='/' isAuthenticated={isLoggedin} component={CalendarScreen}/>
                </Switch>
            </div> 
        </Router>
    )
}
