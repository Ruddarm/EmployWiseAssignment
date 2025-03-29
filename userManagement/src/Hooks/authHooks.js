import { useState } from "react";
import { validateLogin } from "../api/authapi";
import { useNavigate } from "react-router-dom";

function useAuthHooks() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null); // Clear error on input change
  };

  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null); // Clear error on input change
  };
  const validate = () => {
    console.log("validate");
    if (email.trim() === "") {
      setError("Please enter a valid email");
      return false;
    }
    if (password === "") {
      setError("Please enter a password");
      return false;
    }

    return true;
  };
  // handel login
  const handelLogin = async () => {
    try {
      if (!validate()) {
        return;
      }
      let response = await validateLogin({
        email: email,
        password: password,
      });
      const token = response.token;
    //   console.log(token);
      console.log("here token"+token);
      if (token) {
        localStorage.setItem("authToken", token); // ✅ Store token
      }
      navigate("/user/dashboard");
    } catch (err) {
      setError(err?.data?.error);
    }
  };

  return {
    credentials: { email, password },
    error,
    setError,
    loading,
    setLoading,
    validate,
    handelLogin,
    handleEmailChange,
    handlePasswordChange,
  };
}

export default useAuthHooks;
