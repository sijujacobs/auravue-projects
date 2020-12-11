import axios from "axios";
const BASE_URL = "http://auravue.com/api/";

function login() {
  return axios.post('/user', {
    userName: 'siju',
    password: '123'
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}

function getProducts() {
  return axios.get(BASE_URL + "product/read.php").then((response) => handleResponse(response));
}


function handleResponse(response) {
  if (response.status !== 200) {
    console.log("LoginService :: API ERROR  ");
  }
  return response.data;
}

export const loginService = {
  login,
  getProducts
};

