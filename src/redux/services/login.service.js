import axios from "axios";

import {auth} from '../../firebase';
const BASE_URL = "http://auravue.com/api/";

// async function getUser(){
//   const userData = await {
//     firstName:"Name1",
//     lastName:"LastName1",
//     emailName:"email1@email.com",
//     message:"SUCCESSFULLY AUTHENTICATED"
//   };
//   return userData;
// }

function login(userData) {
  console.log('login :: userData : ', userData);
  // return getUser();
  return auth.createUserWithEmailAndPassword(userData.email, userData.password);
  // return axios.post('/user', {
  //   userName: 'siju',
  //   password: '123'
  // }).then(function (response) {
  //   console.log(response);
  // }).catch(function (error) {
  //   console.log(error);
  // });
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

