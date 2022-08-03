import styled from 'styled-components';
import Footer from '../Footer';
import Navbar from '../Navbar'

export default function Habitos() {
    return(
        <HabitosComponent>
            <Navbar />
            <p>Minha rota</p>
            <Footer/>
        </HabitosComponent>
    );
}

const HabitosComponent = styled.div`
    width: 414px;
    height: 900px;
    background-color: #E5E5E5;
`