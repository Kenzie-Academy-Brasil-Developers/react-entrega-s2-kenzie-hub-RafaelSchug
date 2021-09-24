import { Redirect } from "react-router"
import { Header } from "../../components/Header"
import {Container, BasicInfoCard, TechContainer, TechCard, CardButton, TechForm} from './style';
import {useEffect, useState} from 'react';
import api from "../../services/api";
import {useForm} from 'react-hook-form';
import {ToastContainer, toast} from 'react-toastify';
import emailIcon from '../../assets/icons/email.png'
import moduleIcon from '../../assets/icons/module.png'
import contactIcon from '../../assets/icons/contact.png'
import biographyIcon from '../../assets/icons/biography.png'
import noDataImg from '../../assets/imgs/nodata.svg'


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
            }).then(_ => {
                toast.success("Tecnologia adicionada", {autoClose: 2000});
                retrieveDataFromApi();
                
            }).catch(_ => {
                toast.error("Já existe uma tecnologia com o mesmo nome", {autoClose: 2000});
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
                        <div>
                            <img src={emailIcon} alt="" /> 
                            <p><strong>Email</strong>: {userInfo.email}</p>
                        </div>
                        <div>
                            <img src={contactIcon} alt="" /> 
                            <p><strong>Contato</strong>: {userInfo.contact}</p>
                        </div>
                        <div>
                            <img src={biographyIcon} alt="" /> 
                            <p><strong>Bio</strong>: {userInfo.bio}</p>
                        </div>
                        <div>
                            <img src={moduleIcon} alt="" /> 
                            <p><strong>Módulo do Curso</strong>: {userInfo.course_module}</p>
                        </div>
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
                   {userTechs.length > 0 ? (
                       userTechs.map(({title, status, id})=>{
                        return (
                             <TechCard key={id}>
                                <h3>{title}</h3>
                                <p>{status}</p>
                                <CardButton onClick={()=> handleRemoveTech(id)}>Remover</CardButton>
                             </TechCard>
                        )
                    })
                   ) : (
                        <div>
                            <img src={noDataImg} alt="" /> 
                            <div className='no_data_msg'>
                                <p>Ops, parece não há nenhuma tecnologia cadastrada...</p>
                                <p>Que tal adicionar uma agora?</p>
                            </div>
                        </div>
                   )}
                   </div>
                </TechContainer>
            </Container>
        </>
    )
}