function setRole(role) {
    return localStorage.setItem('user-role', role);
}

function getRole() {
    return localStorage.getItem('user-role');
}

function isAdmin() {
    const foundRole = getRole();
    return foundRole === 'admin';
}

export {setRole, isAdmin};
