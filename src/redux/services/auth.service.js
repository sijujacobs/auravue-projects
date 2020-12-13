
import {auth} from '../../firebase';

function signUp(userData) {
  return auth.createUserWithEmailAndPassword(userData.email, userData.password);
}
function login(userData) {
  return auth.signInWithEmailAndPassword(userData.email, userData.password);
}
function logOut() {
  return auth.signOut();
}

export const authService = {
  signUp,
  login,
  logOut
};