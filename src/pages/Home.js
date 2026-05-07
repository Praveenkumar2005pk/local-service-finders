import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "40px" }}>Local Service Finder </h1>
      <p>Find trusted electricians, plumbers & tutors near you</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/services">
          <button>Explore Services</button>
        </Link>

        <Link to="/add">
          <button style={{ marginLeft: "10px" }}>
            Become a Provider
          </button>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <div className="card">
          <h3>🔧 Electricians</h3>
          <p>Fix wiring, fans & appliances</p>
        </div>

        <div className="card">
          <h3>🚰 Plumbers</h3>
          <p>Water issues solved quickly</p>
        </div>

        <div className="card">
          <h3>📚 Tutors</h3>
          <p>Home tuition available</p>
        </div>
      </div>
    </div>
  );
}

export default Home;