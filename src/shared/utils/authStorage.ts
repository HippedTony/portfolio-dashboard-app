export const saveAuth = (auth: any) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

export const getAuth = () => {
  const data = localStorage.getItem("auth")
  return data ? JSON.parse(data) : null
};

export const clearAuth= () => {
  localStorage.removeItem("auth");
};