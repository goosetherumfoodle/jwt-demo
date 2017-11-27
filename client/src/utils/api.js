import axios from 'axios';
import {getToken} from './token';

const authenticated = axios.create({
  baseURL: `${process.env.baseUrl}:3001`,
  headers: {'Authorization': `Bearer ${getToken()}`}
});

const unauthenticated = axios.create({
  baseURL: `${process.env.baseUrl}:3001`
});

function getAgent() {
  return authenticated('/agents.json');
};

function appLoad() {
  return authenticated('/app_data.json');
};

function postUserToken(email, password) {
  return unauthenticated.post('/user_token',
                              {
                                 auth: {
                                   email: email,
                                   password: password
                                 }
                                }

                             );
}

export {getAgent, appLoad, postUserToken};
