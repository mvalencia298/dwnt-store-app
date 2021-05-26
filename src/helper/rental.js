const axios = require('axios');

const endpoint ='http://localhost:5000/store/alquiler';

export const createRental = (rental) =>{
  return axios.post(endpoint, rental)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
}

export const updateRental = (rental) =>{
  return axios.put(`${endpoint}/${rental.nro_alquiler}`, rental)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}


export const getRentals = async (resolve, reject) =>{
    const {data} = await axios.get(endpoint);
    return data;
}