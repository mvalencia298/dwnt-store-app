const axios = require('axios');

const endpoint ='http://localhost:5000/store/cliente';

export const createClient = (client) =>{
    axios.post(endpoint, client)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


export const getClients = async (resolve, reject) =>{
    const {data} = await axios.get(endpoint);
    return data;
}