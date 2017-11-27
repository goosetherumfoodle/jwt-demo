function setRole(role) {
  return localStorage.setItem('gsni-role', role);
};

function getRole() {
  return localStorage.getItem('gsni-role');
};

function isAgent() {
    const foundRole = getRole();
    return foundRole === 'agent';
}

export {setRole, isAgent};
