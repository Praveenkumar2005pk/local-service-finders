import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/add">Add Service</Link>
      <Link to="/bookings">My Bookings</Link>

      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}

      {user && (
        <>
          <span style={{ marginLeft: "10px" }}>
            👋 {user.name} ({user.role})
          </span>
          <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Navbar;