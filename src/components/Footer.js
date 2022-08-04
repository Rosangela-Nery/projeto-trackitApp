import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterComponent>
            <div>
                <p>Hábitos</p>
            </div>
            <div className='circule'>
                <p>Hoje</p>
            </div>
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

    .circule {
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        color: white;
        margin-bottom: 50px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
`