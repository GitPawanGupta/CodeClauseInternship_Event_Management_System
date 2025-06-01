export function saveUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function isLoggedIn() {
  return !!localStorage.getItem("currentUser");
}

export function logout() {
  localStorage.removeItem("currentUser");
}
