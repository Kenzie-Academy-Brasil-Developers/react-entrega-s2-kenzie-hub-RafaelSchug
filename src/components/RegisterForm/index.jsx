import Button from '../Button';
import Container from './style'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';


const RegisterForm = ({setIsAuth}) => {


    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().email("Email inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(8, "Mínimo de 8 caracteres"),
        password_check : yup.string().required("Campo obrigatório").oneOf([yup.ref('password')], 'Senhas não coincidem'),
        contact : yup.string().required("Campo obrigatório"),
        bio: yup.string().required('Campo obrigatório'),
        course_module : yup.string().required()

    })

    const {register, handleSubmit, formState : {errors}} = useForm({resolver: yupResolver(schema)})

    const handleFormSubmit = (data) => {
        api.post('/users', data)
        .then(_ => {
            toast.success("Cadastro efetuado com sucesso", {autoClose: 2500});

            // Auto-login
            api.post('/sessions', {email: data.email, password: data.password})
            .then(response => {

                localStorage.setItem("@kenziehubapi:token", response.data.token)
                localStorage.setItem("@kenziehubapi:userId", response.data.user.id)
            
                toast.success("Redirecionando...", {autoClose: 3000})
                setTimeout(()=> {
                    setIsAuth(true);
                }, 3000)
             })
        })
        .catch(_ => {
            toast.error("Email já utilizado", {autoClose: 2000});
        })
    }

    return (
        <Container>
            <ToastContainer/>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h2>Cadastrar</h2>
                <div>
                    <input autoComplete='true' type="text" placeholder="Nome" {...register('name')}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <input autoComplete='true' type="text" placeholder="Email" {...register('email')}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <input autoComplete='true' type="password" placeholder="Senha" {...register('password')}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div>
                    <input autoComplete='true' type="password" placeholder="Confirmação de Senha" {...register('password_check')}/>
                    {errors.password_check && <span>{errors.password_check.message}</span>}
                </div>
                <div>
                    <input autoComplete='true' type="number" placeholder="Telefone de Contato" {...register('contact')}/>
                    {errors.contact && <span>{errors.contact.message}</span>}
                </div>
                <div>
                    <input autoComplete='true' type="text" placeholder="Biografia" {...register('bio')}/>
                    {errors.bio && <span>{errors.bio.message}</span>}
                </div>
                <div>
                    <select name="" {...register('course_module')}>
                        <option defaultValue value="1º Módulo (Introdução ao Frontend)" >1º Módulo (Introdução ao Frontend)</option>
                        <option value="2º Módulo (Frontend Intermediário)">2º Módulo (Frontend Intermediário)</option>
                        <option value="3º Módulo (Frontend Avançado)">3º Módulo (Frontend Avançado)</option>
                        <option value="4º Módulo (Introdução ao Backend)">4º Módulo (Introdução ao Backend)</option>
                        <option value="5º Módulo (Backend Intermediário)">5º Módulo (Backend Intermediário)</option>
                        <option value="6º Módulo (Backend Avançado)">6º Módulo (Backend Avançado)</option>
                    </select>
                    {errors.course_module && <span>{errors.course_module.message}</span>}
                </div>
                <Button>Cadastrar</Button>
                <div className='login_register_switch'>
                    <p>Já possui uma conta?</p>
                    <Link to='/'>Faça login</Link>
                </div>
            </form>
        </Container>
    )
}

export default RegisterForm;