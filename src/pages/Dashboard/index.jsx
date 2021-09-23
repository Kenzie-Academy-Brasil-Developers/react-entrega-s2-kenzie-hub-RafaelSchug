import { Redirect } from "react-router"
import { Header } from "../../components/Header"
import {Container, BasicInfoCard, TechContainer, TechCard, CardButton, TechForm} from './style';
import {useEffect, useState} from 'react';
import api from "../../services/api";
import {useForm} from 'react-hook-form';
import {ToastContainer, toast} from 'react-toastify';


export const Dashboard = ({isAuth, setIsAuth}) => {
    
    const [token, setToken] = useState('');
    const {register, handleSubmit} = useForm();
    const [userInfo, setUserInfo] = useState({});
    const [userTechs, setUserTechs] = useState([]);

    useEffect(()=>{
        
        if(isAuth){
            setToken(localStorage.getItem('@kenziehubapi:token'));
            retrieveDataFromApi();
        }

    }, [isAuth, setUserTechs])

    if(!isAuth){
        return <Redirect to='/' />
    }

    const retrieveDataFromApi = () => {
        const userId = localStorage.getItem("@kenziehubapi:userId");
        api.get(`/users/${userId}`)
        .then(response => {
            setUserTechs(response.data.techs);
            setUserInfo(response.data);
        })
    }

    const handleLogout = event => {
        event.preventDefault();
        localStorage.clear();
        setIsAuth(false);
    }

    const handleTechFormSubmit = ({title, status}) => {
        if(title && status){

            api.post('users/techs', {title, status}, {
                headers: {Authorization : `Bearer ${token}`}
            }).then(response => {
                toast.success("Tecnologia adicionada", {autoClose: 2000});
                retrieveDataFromApi();
                
            }).catch(error => {
                toast.error("Houve um erro ao adicionar tecnlogia", {autoClose: 2000});
            })
           
        } else {
            return toast.warning("Campos inválidos", {autoClose: 2000});
        }
        
    }

    const handleRemoveTech = tech_id => {
        api.delete(`/users/techs/${tech_id}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(_ => {
            setUserTechs(userTechs.filter(item => item.id !== tech_id));
            toast.success("Tecnologia removida", {autoClose: 2000})
        })
        .catch(_ => toast.error("Houve um erro ao remover tecnlogia", {autoClose: 2000}))
        
    }

    return (
        <>
            <ToastContainer/>
            <Header>
               <a href="/" onClick={handleLogout}>Logout</a>
            </Header>
            <Container>
                    <BasicInfoCard>
                    <h1>Bem vindo, <span>{userInfo.name}</span></h1>
                    <div className='info_wrapper'>
                        <h3>Suas informações:</h3>
                        <p><strong>Email</strong>: {userInfo.email}</p>
                        <p><strong>Contato</strong>: {userInfo.contact}</p>
                        <p><strong>Bio</strong>: {userInfo.bio}</p>
                        <p><strong>Módulo do Curso</strong>: {userInfo.course_module}</p>
                    </div>
                </BasicInfoCard>
                
                <TechContainer>
                    <h3>Suas Tecnologias:</h3>
                    <TechForm>
                        <h4>Adicionar nova tecnologia</h4>
                        <div>
                            <form onSubmit={handleSubmit(handleTechFormSubmit)}>
                                <input type="text" placeholder='Título' {...register('title')}/>
                                <input type="text" placeholder='Status' {...register('status')}/>
                                <button type='submit' >Adicionar</button>
                            </form>
                        </div>
                    </TechForm>
                   <div className='tech_wrapper'>
                   {userTechs.map(({title, status, id})=>{
                       return (
                            <TechCard key={id}>
                               <h3>{title}</h3>
                               <p>{status}</p>
                               <CardButton onClick={()=> handleRemoveTech(id)}>Remover</CardButton>
                            </TechCard>
                       )
                   })}
                   </div>
                </TechContainer>
            </Container>
        </>
    )
}