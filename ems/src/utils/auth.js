export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function isLoggedIn() {
  return !!localStorage.getItem("user");
}

export function logout() {
  localStorage.removeItem("user");
}
