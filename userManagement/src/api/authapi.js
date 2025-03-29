import axiosInstance from "./apiInstance";

// login
async function validateLogin(cred) {
  try{
    const response = await axiosInstance.post("/api/login",cred);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export { validateLogin };
