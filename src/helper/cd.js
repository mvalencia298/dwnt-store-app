const axios = require('axios');

const endpoint ='http://localhost:5000/store/cd';

export const createCD = (cd) =>{
    axios.post(endpoint, cd)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


export const getCD = async (resolve, reject) =>{
    const {data} = await axios.get(endpoint);
    return data;
}