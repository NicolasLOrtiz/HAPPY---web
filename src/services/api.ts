import axios from 'axios';

const api = axios.create({
    //Endereço do Servidor
    baseURL: 'http://localhost:3333', 
})

export default api;