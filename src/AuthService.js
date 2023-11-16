// AuthService.js
export const login = (username, password) => {
  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};
