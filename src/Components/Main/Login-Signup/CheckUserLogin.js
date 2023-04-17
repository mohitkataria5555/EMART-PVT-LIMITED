export const logOut = () => {
  sessionStorage.clear();
  alert("Logged Out");
};

export const isLogIn = () => {
  if (JSON.parse(sessionStorage.getItem("data"))) {
    return true;
  }
  return false;
};
