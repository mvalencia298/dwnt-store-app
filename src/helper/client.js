const axios = require('axios');

const endpoint ='http://localhost:5000/store/cliente';

export const createClient = (client) =>{
  return axios.post(endpoint, client)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
}

export const updateClient = (client) =>{
  return axios.put(`${endpoint}/${client.codigo_cliente}`, client)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}


export const getClients = async (resolve, reject) =>{
    const {data} = await axios.get(endpoint);
    return data;
}