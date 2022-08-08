import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../Footer';
import Navbar from '../Navbar'
import CadastrarHabitos from './CadastrarHabitos';
import RegisteredHabits from './RegisteredHabits';

export default function Habitos({token, fotoDeUsuario}) {

    const navigate = useNavigate();
    const [clicado, setClicado] = useState(false);
    const [tarefas, setTarefas] = useState([])
    const [remove, setRemove] = useState('');
    const [weekDays, setWeekDays] = useState([]);

    useEffect(() => {

        const config = {
            headers: {
                Authorization: 
                    `Bearer ${token}`,
            },
        };

        const promise = axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', 
            config
        );

        promise.then((res) => {
            setTarefas(res.data)
        });
        promise.catch((err) => {
            navigate('/');
        })
    }, [clicado, remove]);

    function paginaInicialDeCriacao() {

        if (!clicado) {
            return (
                <>
                    <TitleEButtonComponent>
                        <h6>Meus hábitos</h6>
                        <h5 onClick={() => {
                        setClicado(true);
                        }}>+</h5>
                    </TitleEButtonComponent>
                    {tarefas.length === 0 ? (
                        <DescriptionComponent>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </DescriptionComponent>
                    ) :(
                        tarefas.map((item, index) => {
                            return (
                                <RegisteredHabits item={item} key={index} Registered={Registered} token={token} setRemove={setRemove} weekDays={weekDays} setWeekDays={setWeekDays}/>
                            );
                        })
                    )}
                </>
            );
        }

        if(clicado) {
            return (
                <>
                    <TitleEButtonComponent>
                        <h6>Meus hábitos</h6>
                    </TitleEButtonComponent>

                    <CadastrarHabitos setClicado={setClicado} token={token} weekDays={weekDays} setWeekDays={setWeekDays}/>

                    {tarefas.length === 0 ? (
                        <DescriptionComponent>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </DescriptionComponent>
                    ) :(
                        tarefas.map((item, index) => {
                            return (
                                <RegisteredHabits item={item} key={index} Registered={Registered} token={token} setRemove={setRemove} weekDays={weekDays} setWeekDays={setWeekDays}/>
                            );
                        })
                    )}
                </>
            );
        }
    }

    return(
        <HabitosComponent>
            <Navbar fotoDeUsuario={fotoDeUsuario}/>
                {paginaInicialDeCriacao()}
            <Footer/>
        </HabitosComponent>
    );
}

const HabitosComponent = styled.div`
    width: 414px;
    height: 760px;
    padding-bottom: 100px;
    margin-bottom: 50px;
    background-color: #E5E5E5;
`

const TitleEButtonComponent = styled.div`
    width: 338px;
    margin: 0 25px;
    margin-top: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h6 {
    font-size: 23px;
    font-weight: 400;
    font-style: normal;
    color: #126BA5;
    }

    h5 {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        font-size: 26px;
        color: white;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const DescriptionComponent = styled.p`
    width: 338px;
    font-size: 18px;
    line-height: 23px;
    color: #666666;
    margin: 0 25px;
`

const Registered = styled.div`
    width: 340px;
    height: 91px;
    background-color: white;
    margin-left: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding-left: 10px;
`