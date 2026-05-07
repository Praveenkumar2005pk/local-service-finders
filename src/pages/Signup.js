import { useState } from "react";
import { saveUser } from "../utils/localStorage";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleSignup = () => {
    saveUser(user);
    alert("Signup successful");
  };

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })} />

      <input placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })} />

      <input type="password" placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })} />

      {/* 🔥 ROLE SELECT */}
      <select onChange={(e) => setUser({ ...user, role: e.target.value })}>
        <option value="user">User</option>
        <option value="provider">Service Provider</option>
      </select>

      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;