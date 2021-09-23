import { Redirect } from "react-router"

export const Dashboard = ({isAuth}) => {

    if(!isAuth){
        return <Redirect to='/' />
    }

    return (
        <div>Dashboard</div>
    )
}