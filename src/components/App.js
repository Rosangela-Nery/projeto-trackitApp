import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./loginECadastro/Login";
import Habitos from "./habitos/Habitos";
import GlobalStyle from "../styles/globalStyle";
import { useState } from "react";
import Historic from "./historico/Historico";

export default function App() {
    const [token, setToken] = useState('');
    const [fotoDeUsuario, setFotoDeUsuario] = useState('');

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Login setToken={setToken} setFotoDeUsuario={setFotoDeUsuario}/>}/>
                <Route path='/habitos' element={<Habitos token={token} fotoDeUsuario={fotoDeUsuario}/>} />
                <Route path='/historico' element={<Historic fotoDeUsuario={fotoDeUsuario}/>}/> 
            </Routes>
        </BrowserRouter>
    );
}