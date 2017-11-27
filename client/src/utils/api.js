import axios from 'axios';
import {getToken} from './authToken';

const apiUrl = `${process.env.baseUrl}:3001`;

const authenticated = axios.create({
    baseURL: apiUrl,
    headers: {'Authorization': `Bearer ${getToken()}`}
});

const unauthenticated = axios.create({
    baseURL: apiUrl
});

function getUser() {
    return authenticated('/users.json');
}

function postAuthToken(email, password) {
    return unauthenticated.post(
        '/user_token',
        {
            auth: {
                email: email,
                password: password
            }
        }

    );
}

export {getUser, postAuthToken};
