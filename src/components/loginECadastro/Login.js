import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CadastrarConta from "./CadastrarConta";
import styled from "styled-components";

export default function Login() {
    const navigate = useNavigate();

    const [clicado, setClicado] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleForm(e) {
        e.preventDefault();
        const dados = {
            email,
            password,
        };

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit', dados);

        promise.then((res) => {
            console.log("wer: ", res.auth);
            restForm();
            navigate('/');
        })
    }

    function restForm() {
        setEmail('');
        setPassword('');
    }

    function cadastre_se() {
        if(!clicado) {
            return (
                <LoginComponents>
                <img src="../images/logo.svg" alt="Logo" />
                <form onSubmit={handleForm}>
                    <label></label>
                    <input 
                        id="formEmail" 
                        placeholder="email"
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <input  
                        id="forSenha" 
                        placeholder="senha"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <button>Entrar</button>
                </form>
                <p onClick={() => {
                    setClicado(true);
                }}>Não tem uma conta? Cadastre-se!</p>
            </LoginComponents>
            );
        }

        if(clicado){
            return(
                <CadastrarConta LoginComponents={LoginComponents} setClicado={setClicado}/>
            );
        }
    }

    return (
        <>
            {cadastre_se()}
        </>
    );
}

const LoginComponents = styled.div`
    width: 414px;
    height: 962px;
    background-color: white;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
        height: 180px;
        margin-bottom: 30px;
    }

    form {
        width: 303px;
    }

    input {
        width: 303px;
        height: 45px;
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        padding-left: 10px;
        font-size: 20px;
    }

    button {
        width: 303px;
        height: 45px;
        margin-top: 5px;
        border-radius: 5px;
        border: 0;
        background-color: #52B6FF;

        font-size: 21px;
        color: white;
        cursor: pointer;
    }

    p {
        font-size: 14px;
        color: #52B6FF;
        text-decoration-line: underline;
        margin-top: 30px;
        cursor: pointer;
    }
`

