import React, { useState } from "react";
import UserContext from "../../context/context";
import { useContext } from "react";
const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault;
    setUser({ username, password });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        style={{ padding: "8px 12px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px 12px" }}
      />
      <button onClick={handleSubmit} style={{ marginBottom: "10px" }}>
        Submit
      </button>
    </div>
  );
};

export default Login;
