const axios = require('axios');

export const getClients = async (resolve, reject) =>{
    const endpoint ='http://localhost:5000/store/cliente';
    const {data} = await axios.get(endpoint);
    return data;
}