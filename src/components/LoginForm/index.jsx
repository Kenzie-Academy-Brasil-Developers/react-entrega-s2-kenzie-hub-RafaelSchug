import Button from '../Button';
import Container from './style'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({setIsAuth}) => {

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(8, "Mínimo de 8 caracteres")
    })

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const handleFormSubmit = (data) => {
        console.log(data);
        api.post('/sessions', data)
        .then(response => {
            console.log(response);
            localStorage.setItem("@kenziehubapi:token", response.data.token)
            localStorage.setItem("@kenziehubapi:userId", response.data.user.id)
            return setIsAuth(true);
        })
        .catch(error => {
            console.log(error);
            toast.error("Email/Senha incorreto", {autoClose: 2000});
        });
    }

    console.log(errors);

    return (
        <Container>
            <ToastContainer/>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h2>Login</h2>
                <div>
                    <input type="email" placeholder="Email" {...register('email')}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <input type="password" placeholder="Senha" {...register('password')}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <Button>Login</Button>
            </form>
        </Container>
    )
}

export default LoginForm;