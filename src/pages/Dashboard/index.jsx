import { Redirect } from "react-router"
import { Header } from "../../components/Header"
import {Container, BasicInfoCard, TechContainer, TechCard, CardButton} from './style';
import {useEffect, useState} from 'react';
import api from "../../services/api";


export const Dashboard = ({isAuth, setIsAuth, setUserTechs, userTechs}) => {
    
    const [token, setToken] = useState('');

    useEffect(()=>{
        
        if(isAuth){
            setToken(localStorage.getItem('@kenziehubapi:token'));
            const userId = localStorage.getItem("@kenziehubapi:userId");
            
            api.get(`/users/${userId}`)
            .then(response => {
                setUserTechs(response.data.techs);
            })
        }

    }, [isAuth, setUserTechs])

    if(!isAuth){
        return <Redirect to='/' />
    }

    const handleLogout = event => {
        event.preventDefault();
        localStorage.clear();
        setIsAuth(false);
    }

    const handleRemoveTech = tech_id => {
        api.delete(`/users/techs/${tech_id}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => console.log(response))
        .catch(error => console.log(error))


        setUserTechs(userTechs.filter(item => item.id !== tech_id));
    }

    return (
        <>
            <Header>
               <a href="/" onClick={handleLogout}>Logout</a>
            </Header>
            <Container>
                <BasicInfoCard>
                    <h1>Nome</h1>
                </BasicInfoCard>
                
                <TechContainer>
                    <div>
                        <h2>Suas Tecnologias:</h2>
                    </div>
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