import {Switch, Route, Redirect } from "react-router"
import {Login} from '../pages/Login';
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import {useEffect, useState} from 'react';


export const Routes = () => {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=> {
        const token = JSON.parse(localStorage.getItem('@kenziehub:token'));
        if(token){
            console.log(token)
            return setIsAuth(true)
        }
    }, [isAuth])

    return (
        <Switch>
            <Route exact path='/'>
                <Login isAuth={isAuth} setIsAuth={setIsAuth}></Login>
            </Route>
            <Route exact path = '/register'>
                <Register isAuth={isAuth} setIsAuth={setIsAuth}></Register>
            </Route>
            <Route exact path = '/dashboard' >
                <Dashboard isAuth={isAuth}></Dashboard>
            </Route>
        </Switch>
    )
}