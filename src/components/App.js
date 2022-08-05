import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./loginECadastro/Login";
// import Habitos from "./habitos/Habitos";
import GlobalStyle from "../styles/globalStyle";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                {/* <Route path='/' element={<Habitos />} /> */}
                <Route path='/' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}