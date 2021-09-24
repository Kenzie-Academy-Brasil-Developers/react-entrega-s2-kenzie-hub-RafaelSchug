import {Header} from '../../components/Header'
import { Link } from 'react-router-dom'
import { Main } from '../../components/Main'
import { Redirect } from 'react-router'
import RegisterForm from '../../components/RegisterForm'

export const Register = ({isAuth, setIsAuth, setUserTechs}) => {

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
           <RegisterForm setIsAuth={setIsAuth} setUserTechs={setUserTechs}></RegisterForm>
        </Main>
        </>
    )
}