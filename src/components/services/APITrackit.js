import axios from "axios";

const base_url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function fazerCadastro() {
    const promise = axios.post(`${base_url}/cadastro`);
    return promise;
}

function fazerLogin() {
    const promise = axios.post(`${base_url}/`);
    return promise;
}

function criarHabitos() {
    const promise = axios.post(`${base_url}/habitos`);
    return promise;
}

function listarHabitos() {
    const promise = axios.get(`${base_url}/habitos`);
    return promise
}

function deletarHabitos() {
    const promise = axios.delete(`${base_url}/habitos/${idHabito}`);
    return promise;
}

function buscarHabitosDeHoje() {
    const promise = axios.get(`${base_url}/habitos/today`);
    return promise;
}

function marcarHabitosComoFeito() {
    const promise = axios.post(`${base_url}/habitos/${idHabito}/check`);
    return promise;
}

function desmarcarHabitoComoFeito() {
    const promise = axios.post(`${base_url}/habitos/${idHabito}/uncheck`);
    return promise;
}

function historicoDeHabitosDiario() {
    const promise = axios.get(`${base_url}/habitos/history/daily`);
    return promise;
}

export { fazerCadastro, fazerLogin, criarHabitos, listarHabitos, deletarHabitos, buscarHabitosDeHoje, marcarHabitosComoFeito, desmarcarHabitoComoFeito, historicoDeHabitosDiario }