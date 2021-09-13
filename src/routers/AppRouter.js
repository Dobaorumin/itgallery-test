import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import {LoginRoute} from "./LoginRoute"
import { HomeScreen } from "../components/home/HomeScreen";
import { useSelector } from "react-redux";

export const AppRouter = () => {


    const {active:isLogin} = useSelector(state => state.login)
    

    return (
        <Router>
            <div>
            <Switch>
                <PublicRoute
                isAuthenticated={isLogin} 
                path="/login" 
                component={LoginRoute} 
                />
                <PrivateRoute 
                exact 
                isAuthenticated={isLogin}
                path="/" 
                component={HomeScreen} />

                <Redirect to="/login"/>
            </Switch>
            </div>
        </Router>
    )
}
