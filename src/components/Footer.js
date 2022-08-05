import CirculeDeProgresso from './CirculeDeProgresso';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterComponent>
            <div>
                <p>Hábitos</p>
            </div>
            <CirculeDeProgresso />
            <div>
                <p>Histórico</p>
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
`