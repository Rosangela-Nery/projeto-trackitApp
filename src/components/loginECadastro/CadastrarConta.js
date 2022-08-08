import axios from "axios";
import { useState } from "react";

export default function CadastrarConta({LoginComponents, setClicado}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function handleForm(e) {
        e.preventDefault();
        const dadosDeCadastro = {
            email,
            password,
            name,
            image,
        };

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', dadosDeCadastro);

        promise.then((res) => {
            console.log("cadastro: ", res)
            restForm();
        })
    }

    function restForm() {
        setEmail('');
        setPassword('');
        setName('');
        setImage('');
    }

    return (
        <LoginComponents>
            <img src="../images/logo.svg" alt="Logo" />
             <form onSubmit={handleForm}>
                <input 
                    placeholder="E-mail"
                    type="text" 
                    name='email'
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                    required
                />
                <input  
                    placeholder="Senha"
                    type="password"
                    name='password'
                    onChange={(e) => {setPassword(e.target.value)}}
                    value={password}
                    required
                />
                <input  
                    placeholder="nome"
                    type="text"
                    name='name'
                    onChange={(e) => {setName(e.target.value)}}
                    value={name}
                    required
                />
                <input  
                    placeholder="foto"
                    type="foto"
                    name='image'
                    onChange={(e) => {setImage(e.target.value)}}
                    value={image}
                    required
                />
                <button>Cadastrar</button>
            </form>
            <p onClick={() => {
                    setClicado(false);
                }}>Já tem uma conta? Faça login!</p>
        </LoginComponents>
    )
}