import { useState, useEffect } from "react";
import { notifyError } from "../components/notifyError/notifyError";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(false);
  const [userToken, setUserToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? storedToken : false;
  });

  const handleAuth = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const authResult = await response.json();

      setLoading(true);
      setUserToken(authResult.token);

      if(authResult.token !== undefined) {
        localStorage.setItem("token", authResult.token);
        localStorage.setItem("email", data.email);
      };

      if(authResult.error) {
        setUserError(true);
      };

    } catch(error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  };

  const handleLogin = async (url, data) => {
    await handleAuth(url, data);
  };

  const handleRegister = async (url, data) => {
    await handleAuth(url, data);
  };

  useEffect(() => {
    if(userError) {
      notifyError()
      setUserError(false);
    }
  }, [userError])

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUserToken(null);
  };

  return { handleLogin, handleRegister, userToken, handleLogOut, loading };
};

export { useAuth };