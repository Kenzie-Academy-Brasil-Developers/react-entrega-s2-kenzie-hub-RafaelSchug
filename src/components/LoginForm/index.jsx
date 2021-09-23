import Button from '../Button';
import Container from './style'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const LoginForm = () => {

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(8, "Mínimo de 8 caracteres")
    })

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const handleFormSubmit = (data) => {
        console.log(data);
    }

    console.log(errors);

    return (
        <Container>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h2>Login</h2>
                <div>
                    <input type="email" placeholder="Email" {...register('email')} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <input type="password" placeholder="Senha" {...register('password')} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <Button>Login</Button>
            </form>
        </Container>
    )
}

export default LoginForm;