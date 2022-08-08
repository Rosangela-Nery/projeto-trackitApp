import styled from 'styled-components';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Historic({fotoDeUsuario}) {
    return(
        <>
            <Navbar fotoDeUsuario={fotoDeUsuario}/>
            <HistoricHabit>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoricHabit>
            <Footer />
        </>
    );
}

const HistoricHabit = styled.div`
    width: 414px;
    height: 940px;
    background-color: #E5E5E5;
    padding-top: 80px;
    padding-left: 20px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        font-weight: 400;
    }

    p {
        width: 350px;
        color: #666666;
        font-size: 18px;
        line-height: 22px;
    }
`

