import React from 'react'

import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';

export const LoginRoute = () => {
    return (
        <div className="login__main">
            <div className="login__box-container">
                <Switch>
                <Route 
                path="/login" 
                component={LoginScreen} 
                />
                <Redirect to="/"/>
                </Switch>
            </div>
        </div>
    )
}