export const TOKEN_KEY = "@strongBerry-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getUser = () => JSON.parse(localStorage.getItem(TOKEN_KEY));
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY))?.token;
export const saveToken = (userData) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(userData));
};
export const saveUserInfo = (userData) => {
  var user = getUser();
  user = { ...user, ...userData };
  localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
};
export const logout = (callback) => {
  localStorage.removeItem(TOKEN_KEY);
  callback();
};