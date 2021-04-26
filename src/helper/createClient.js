const axios = require('axios');

export const createClient = (client) =>{
    const endpoint ='http://localhost:5000/store/cliente';
    axios.post(endpoint, client)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}