import { useState } from 'react';
import styled from 'styled-components';

export default function CadastrarHabitos({setClicado}) {

    const [name, setName] = useState('');

    function handleForm(e) {
        e.preventDefault();

        const galleryOfHabits = {
            name
        }
        console.log(galleryOfHabits)
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
                    <p>D</p>
                    <p>S</p>
                    <p>T</p>
                    <p>Q</p>
                    <p>Q</p>
                    <p>S</p>
                    <p>S</p>
                </SemanasComponent>
                <ButtonGeral>
                    <ButtonBrancoComponent onClick={() => {setClicado(false)}}>
                        Cancelar
                    </ButtonBrancoComponent>
                    <ButtonAzulComponent>Salvar</ButtonAzulComponent>
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

    p {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
        margin-right: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`

const InputComponent = styled.input`
    width: 290px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 19px;
    color: #DBDBDB;
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