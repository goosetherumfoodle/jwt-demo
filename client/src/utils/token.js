function getToken() {
  return localStorage.getItem('gsni-token');
}

function setToken(token) {
  return localStorage.setItem('gsni-token', token);
}

function signedIn() {
  return !!getToken()
}

function signOut() {
  localStorage.clear();
}


export {getToken, setToken, signedIn, signOut}
