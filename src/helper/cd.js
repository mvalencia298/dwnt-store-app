const axios = require('axios');

const endpoint ='http://localhost:5000/store/cd';

export const createCD = (cd) =>{
  return axios.post(endpoint, cd)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
}

export const updateCD = (cd) =>{
  return axios.put(`${endpoint}/${cd.codigo_titulo}`, cd)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}


export const getCD = async (resolve, reject) =>{
    const {data} = await axios.get(endpoint);
    console.log(data);
    return data;
}