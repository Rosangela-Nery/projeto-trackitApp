import styled from 'styled-components';

export default function Navbar() {
    return (
        <NavbarComponent>
            <p>Trackit</p>
            <img src='../images/foto2.png' width="51px" height="51px"/>
        </NavbarComponent>
    );
}

const NavbarComponent = styled.div`
    width: 414px;
    height: 70px;
    box-sizing: border-box;
    background-color: #126BA5;
    padding: 0 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    p {
        font-family: 'Playball';
        font-size: 39px;
        color: white;
    }
`;