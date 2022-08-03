import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habitos from "./habitos/Habitos";
import GlobalStyle from "../styles/globalStyle";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Habitos />} />
            </Routes>
        </BrowserRouter>
    );
}