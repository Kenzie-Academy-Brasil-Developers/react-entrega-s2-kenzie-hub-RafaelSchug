import {Switch, Route } from "react-router"
import {Login} from '../pages/Login';
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Login></Login>
            </Route>
            <Route path = '/register'>
                <Register></Register>
            </Route>
            <Route path = '/dashboard'>
                <Dashboard></Dashboard>
            </Route>
        </Switch>
    )
}