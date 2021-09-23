import {Header} from '../../components/Header'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Main } from '../../components/Main'
import LoginForm from '../../components/LoginForm'

export const Login = ({isAuth, setIsAuth, setUserTechs}) => {

    if(isAuth){
        return <Redirect to='/dashboard' />
    }
    
    return (
        <>
        <Header>
            <Link to='/'>Login</Link>
            <Link to='/register'>Registrar-se</Link>
        </Header>
        <Main>
           <LoginForm setIsAuth={setIsAuth} setUserTechs={setUserTechs}></LoginForm>
        </Main>
        </>
    )
}