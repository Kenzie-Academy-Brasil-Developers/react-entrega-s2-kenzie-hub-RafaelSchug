import Button from '../Button';
import Container from './style'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({setIsAuth}) => {

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(8, "Mínimo de 8 caracteres")
    })

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const handleFormSubmit = (data) => {
        toast.info('Conectando-se à Kenziehub...', {autoClose : 2500});
        api.post('/sessions', data)
        .then(response => {
            localStorage.setItem("@kenziehubapi:token", response.data.token)
            localStorage.setItem("@kenziehubapi:userId", response.data.user.id)
            toast.success('Login efetuado com sucesso', {autoClose : 2500});
            return setIsAuth(true);
        })
        .catch(_ => {
            toast.error("Email/Senha incorreto", {autoClose: 2000});
        });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h2>Login</h2>
                <div>
                    <input autoComplete='true' type="text" placeholder="Email" {...register('email')}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <input autoComplete='true' type="password" placeholder="Senha" {...register('password')}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <Button>Login</Button>
                <div className='login_register_switch'>
                    <p>Ainda não possui uma conta?</p>
                    <Link to='/register'>Registrar-se</Link>
                </div>
            </form>
            
        </Container>
    )
}

export default LoginForm;