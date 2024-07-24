import React from "react";
import axios from "axios";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/auth/logout");
      console.log(response.data.message);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
