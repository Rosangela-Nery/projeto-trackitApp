import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Week from './Week';
import { useNavigate } from 'react-router-dom';

export default function CadastrarHabitos({setClicado, token, weekDays, setWeekDays}) {
    const [name, setName] = useState('');
    const [catchWeek, setCatchWeek] = useState('');
    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();

        const galleryOfHabits = {
            name,
            'days': catchWeek
        }

        const config = {
            headers: {
                Authorization: 
                    `Bearer ${token}`,
            },
        };

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', galleryOfHabits, config);


        promise.then((res) => {
            console.log('resposta: ', res.data);
            setClicado(false);
        });
        promise.catch(() => {
            navigate('/habitos')
        });
    }

    return (
        <CriarHabitosComponent>
            <form onSubmit={ handleForm }>
                <InputComponent
                    type="text" 
                    placeholder="nome do hábito"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />

                <SemanasComponent>
                    <Week value={catchWeek} setCatchWeek={setCatchWeek} weekDays={weekDays} setWeekDays={setWeekDays}/>
                </SemanasComponent>

                <ButtonGeral>
                    <ButtonBrancoComponent onClick={() => {setClicado(false)}}>
                        Cancelar
                    </ButtonBrancoComponent>
                    <ButtonAzulComponent type='submit'>Salvar</ButtonAzulComponent>
                </ButtonGeral>
            </form>
        </CriarHabitosComponent>
    )
}

const CriarHabitosComponent = styled.div`
    width: 340px;
    height: 180px;
    box-sizing: border-box;
    background-color: white;
    padding: 20px 20px;
    border-radius: 5px;
    margin: 0 30px;
    margin-bottom: 25px;

    display: flex;
    flex-direction: column;
`

const SemanasComponent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 20px;

`

const InputComponent = styled.input`
    width: 290px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 19px;
    padding-left: 10px;
`

const ButtonGeral = styled.div`
    width: 300px;
    display: flex;
    justify-content: flex-end;
`

const ButtonBrancoComponent = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: 0px;
    background-color: white;
    margin-right: 10px;

    font-size: 16px;
    color: #52B6FF;
    cursor: pointer;
`

const ButtonAzulComponent = styled.button`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: 0px;
    background-color: #52B6FF;
    font-size: 16px;
    color: white;
    cursor: pointer;
`