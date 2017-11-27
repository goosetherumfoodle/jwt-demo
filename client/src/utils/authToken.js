function getToken() {
    return localStorage.getItem('auth-token');
}

function setToken(token) {
    return localStorage.setItem('auth-token', token);
}

function isSignedIn() {
    return Boolean(getToken());
}

function signOut() {
    localStorage.clear();
}

export {getToken, setToken, isSignedIn, signOut};
