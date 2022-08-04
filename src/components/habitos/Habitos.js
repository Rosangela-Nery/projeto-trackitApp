import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Navbar from '../Navbar'
import CadastrarHabitos from './CadastrarHabitos';

export default function Habitos() {

    const [clicado, setClicado] = useState(false);

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
                    <DescriptionComponent>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </DescriptionComponent>
                </>
            );
        }

        if(clicado) {
            return (
                <>
                    <TitleEButtonComponent>
                        <h6>Meus hábitos</h6>
                        <h5 onClick={() => {
                        setClicado(true);
                        }}>+</h5>
                    </TitleEButtonComponent>

                    <CadastrarHabitos setClicado={setClicado}/>

                    <DescriptionComponent>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </DescriptionComponent>
                </>
            );
        }
    }

    return(
        <HabitosComponent>
            <Navbar />
                {paginaInicialDeCriacao()}
            <Footer/>
        </HabitosComponent>
    );
}

const HabitosComponent = styled.div`
    width: 414px;
    height: 900px;
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