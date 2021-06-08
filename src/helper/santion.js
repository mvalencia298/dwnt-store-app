const axios = require('axios');

const endpoint ='http://localhost:5000/store/sancion';

export const createSantion = (santion) =>{
  return axios.post(endpoint, santion)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
}

export const updateSantion = (santion) =>{
  return axios.put(`${endpoint}/${santion.nro_sancion}`, santion)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}


export const getSantion = async (resolve, reject) =>{
    const {data} = await axios.get(endpoint);
    return data;
}