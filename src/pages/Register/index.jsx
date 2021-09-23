import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export const Register = () => {

    return (
        <>
        <Header>
            <Link to='/'>Login</Link>
            <Link to='/register'>Registrar-se</Link>
        </Header>
        </>
    )
}