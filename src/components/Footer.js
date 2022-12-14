import CirculeDeProgresso from './CirculeDeProgresso';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <FooterComponent>
            <div>
                <Link to={'/habitos'}>
                    <p>Hábitos</p>
                </Link>
            </div>
            <CirculeDeProgresso />
            <div>
                <Link to={'/historico'}>
                    <p>Histórico</p>
                </Link>
            </div>
        </FooterComponent>
    );
}

const FooterComponent = styled.div`
    width: 414px;
    height: 70px;
    box-sizing: border-box;
    background-color: white;
    color: #52B6FF;
    font-size: 18px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    a {
        text-decoration: none;
        color: #52B6FF;
    }
`