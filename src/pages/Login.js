import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/localStorage";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = getUser();

    if (user && user.email === data.email && user.password === data.password) {
      alert("Login successful");
      navigate("/services");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })} />

      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;